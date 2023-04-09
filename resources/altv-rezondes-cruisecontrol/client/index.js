import * as alt from 'alt';
import * as native from "natives";

const scriptConstants = {
    changeValue: 10,
    startValue: 80,
    maxSpeed: 200,
    changeValueIngame: 2.7777777777777777777777777777778,
    startValueIngame: 22.2222222222222222222222222222222,
};

const editableScriptConstants = {
    higherSpeedKey: 39, // Right Arrow
    lowerSpeedKey: 37, // Left Arrow
    startKey: 89, // Key Y
}

let playerSeat = null;
let playerVehicle = null;
let isInVehicle = false;
let currentMaxVehicleSpeed = scriptConstants.startValueIngame;
let maxVehicleSpeed = scriptConstants.startValue;
let speedLimiter = false;
let isTempolimiterWorking = false;

alt.on('enteredVehicle', (vehicle, seat) => {
    playerSeat = seat;
    playerVehicle = vehicle;
    isInVehicle = true;
    
    // hudBrowser.emit("CEF:HUD:SetPlayerHUDTempomatInfos", maxVehicleSpeed, "A");
    console.log(maxVehicleSpeed + " Ausgeschaltet");
});

alt.on('changedVehicleSeat', (vehicle, oldSeat, seat) => {
    playerSeat = seat;
    playerVehicle = vehicle;
    isInVehicle = true;
});

alt.on('leftVehicle', (vehicle, seat) => {
    native.setVehicleMaxSpeed(vehicle, 0); // Reset VehicleMaxSpeed
    playerSeat = null;
    playerVehicle = null;
    isInVehicle = false;
    currentMaxVehicleSpeed = scriptConstants.startValueIngame;
    maxVehicleSpeed = scriptConstants.startValue;
    speedLimiter = false;
    isTempolimiterWorking = false;
});

alt.on('keydown', (key) => {
    if (!playerSeat == 1) return;

    switch (key) {
        case editableScriptConstants.higherSpeedKey:
            SetCruiseControlHigher();
            break;
        case editableScriptConstants.lowerSpeedKey:
            SetCruiseControlLower();
            break;
        case editableScriptConstants.startKey:
            StartCruiseControl();
            break;
    }
});

function SetCruiseControlHigher(){
    if (!isInVehicle) return;
    if (maxVehicleSpeed == scriptConstants.maxSpeed) return;

    currentMaxVehicleSpeed += scriptConstants.changeValueIngame;
    maxVehicleSpeed += scriptConstants.changeValue;

    // hudBrowser.emit("CEF:SetPlayerHUDTempomatInfos", maxVehicleSpeed, "N");
    console.log(maxVehicleSpeed + " Nichts (only update)");

    if (!speedLimiter) return;

    native.setVehicleMaxSpeed(playerVehicle.scriptID, currentMaxVehicleSpeed);
}

function SetCruiseControlLower(){
    if (!isInVehicle) return;
    if (maxVehicleSpeed == scriptConstants.changeValue) return;

    currentMaxVehicleSpeed -= scriptConstants.changeValueIngame;
    maxVehicleSpeed -= scriptConstants.changeValue;

    // hudBrowser.emit("CEF:SetPlayerHUDTempomatInfos", maxVehicleSpeed, "N");
    console.log(maxVehicleSpeed + " Nichts (only update)");

    if (!speedLimiter) return;
    
    speedLimiter = false;
    SyncCruiseControl();
}

function StartCruiseControl(){
    if(isTempolimiterWorking){
        speedLimiter = true;
        return;
    }
    SyncCruiseControl();
}

function SyncCruiseControl() {
    if (!isInVehicle) return;

    if (!speedLimiter) {
        let currentSpeed = native.getEntitySpeed(playerVehicle.scriptID);
        if (currentSpeed >= currentMaxVehicleSpeed) {
            isTempolimiterWorking = true;

            // hudBrowser.emit("CEF:SetPlayerHUDTempomatInfos", maxVehicleSpeed, "D");
            console.log(maxVehicleSpeed + " Drosselvorgang...");

            alt.setTimeout(() => {
                native.setVehicleMaxSpeed(playerVehicle.scriptID, currentSpeed - 1);
                SyncCruiseControl();
            }, 100)
            return;
        }
        isTempolimiterWorking = false;
        speedLimiter = true;

        // hudBrowser.emit("CEF:SetPlayerHUDTempomatInfos", maxVehicleSpeed, "E");
        console.log(maxVehicleSpeed + " Eingeschaltet");

        native.setVehicleMaxSpeed(playerVehicle.scriptID, currentMaxVehicleSpeed);
        return;
    }

    isTempolimiterWorking = false;
    speedLimiter = false;

    // hudBrowser.emit("CEF:SetPlayerHUDTempomatInfos", maxVehicleSpeed, "A");
    console.log(maxVehicleSpeed + " Ausgeschaltet");

    native.setVehicleMaxSpeed(playerVehicle.scriptID, 0);
}
