# Speedlimiter

Created by Rezondes

❤️ Geschrieben für Cops and Crimes <br>
- [Discord](http://discord.copsandcrimes.de/) <br>
- [Patreon](http://patreon.copsandcrimes.de/) <br>

⭐ Wenn dir dieses Repository geholfen hat!

# Beschreibung
Dieses Repository stellt eine alt:V-Ressource bereit, um die Funktionen eines Geschwindigkeitsbegrenzers (Speedlimiter) zu simulieren. <br>
Es ist ein älteres Skript von mir welches ich nur geringfügig angepasst habe, damit diese auch als einzelne Ressource funktioniert. <br>

Um anzuzeigen wie der Speedlimiter eingestellt und in welchem Modus sich dieser befindet wird in der dieser Ressource auf einem einfach 2D-Text mit GTA 5 Natives zurückgegriffen. <br>
Der 2D-Text befindet sich mittig am unterem Rand auf dem Bildschirm. <br>

![#d33434](https://placehold.co/15x15/d33434/d33434.png) Rot  - Ausgeschaltet <br>
![#00a11b](https://placehold.co/15x15/00a11b/00a11b.png) Grün - Eingeschaltet <br> 
![#dce02f](https://placehold.co/15x15/dce02f/dce02f.png) Gelb - Geschwindigkeitsreduzierung <br>

## Installation
Fügen Sie einfach den Ordner `altv-rezondes-speedlimiter` in ihren Serverordner `resources` und den Namen dieser Ressource zu Ihrer `server.toml` hinzu.

```
altv-rezondes-speedlimiter
```

## Verwendung
Der Speedlimiter ist Anfangs auf `80 km/h` eingestellt. <br>
Mit der `Rechten Pfeiltaste` erhöht man diesen Wert um `10km/h`. <br>
Mit der `Linken Pfeiltaste` verringert man diesen Wert um `10km/h`. <br>

Die maximal einstellbare Geschwindigkeit ist `200 km/h` und die Mindestgeschwindigkeit `10km/h`. <br>

Mit der Taste `Y` startet bzw. stopt man den Speedlimiter. <br>
Sollte der Speedlimiter eingeschaltet werden und das Fahrzeug über die eingestellte maximal Geschwindigkeit fahren so wird dieses langsam heruntergedrosselt bis die Zielgeschwindigkeit erreicht wird. Der Spieler kann dabei weiterhin die Beschleunigungstaste gedrückt halten. <br>


Auf Wunsch können die Tasten aber auch ganz einfach unter den `editableScriptConstants` geändert werden. <br>
Man findet diese ganz oben in der `client.js`. <br>

```js
const editableScriptConstants = {
    higherSpeedKey: 39, // Right Arrow
    lowerSpeedKey: 37, // Left Arrow
    startKey: 89, // Key Y
}
```

## Video 
Der im Video gezeigte Speedometer ist von [MyHwu9508](https://github.com/MyHwu9508) - [altv-os-speedometer-collection](https://github.com/MyHwu9508/altv-os-speedometer-collection). <br>

[<img src="https://i.imgur.com/x85ajxX.jpeg" width="50%">](https://www.youtube.com/watch?v=8jLysZcdmVg)
