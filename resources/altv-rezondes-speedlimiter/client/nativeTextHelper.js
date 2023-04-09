import * as native from 'natives';

export function Draw2DText(text, x, y, scale, r, g, b){
    native.beginTextCommandDisplayText('STRING')
    native.addTextComponentSubstringPlayerName(text)
    native.setTextFont(4)
    native.setTextProportional(7)
    native.setTextScale(scale, scale)
    native.setTextColour(r, g, b, 255)
    native.setTextDropshadow(0, 0, 0, 0,255)
    native.setTextDropShadow()
    native.setTextEdge(4, 0, 0, 0, 255)
    native.setTextOutline()
    native.endTextCommandDisplayText(x, y, 0)
}