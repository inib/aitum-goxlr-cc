import { ICCActionInputs, ICustomCode } from 'aitum.js/lib/interfaces';
import { BooleanInput, FloatInput, IntInput, StringInput } from 'aitum.js/lib/inputs';
import { AitumCC } from 'aitum.js';
import { DeviceType } from 'aitum.js/lib/enums';
import { forEachChild } from 'typescript';

/*********** CONFIG ***********/
// The custom code action name
const name: string = 'GoXLR - Change Volume';
const { goxlr } = require("goxlr");
const goxlrInstance = new goxlr();

enum goxlrChannels {
    Mic = "Mic",
    LineIn = "LineIn",
    Console = "Console",
    System = "System",
    Game = "Game",
    Chat = "Chat",
    Sample = "Sample",
    Music = "Music",
    Headphones = "Headphones",
    MicMonitor = "MicMonitor",
    LineOut = "LineOut",
}

let vol: number = 0;
let chan: string = goxlrChannels["Mic"];

// The custom code inputs
const inputs: ICCActionInputs = {
    volChannel: new StringInput('Channel (eg. Mic, Game)', { required: true }),
    setVolume: new IntInput('Volume (0-100)', { required: true })
}

// The code executed.
async function method(inputs: { [key: string]: number | string | boolean | string[] }) {

    if (inputs.setVolume as number > 100) {
        vol = 100;
    }
    else if (inputs.setVolume as number < 0) {
        vol = 0;
    }
    else {
        vol = (inputs.setVolume as number);
    }

    for (const f in goxlrChannels) {
        if (f === (inputs.volChannel as string)) {
            chan = f;            
            changeVol(vol, chan);

            return;
        }
    }
}

async function changeVol(_volume: number, _channel: String) {
    console.log("Setting GoXLR Channel: " + _channel + " to: " + _volume + "%");
    await goxlrInstance.setVolume(_channel, _volume);
}

/*********** DON'T EDIT BELOW ***********/
export default { name, inputs, method } as ICustomCode;