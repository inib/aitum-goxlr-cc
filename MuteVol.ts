import { ICCActionInputs, ICustomCode } from 'aitum.js/lib/interfaces';
import { BooleanInput, FloatInput, IntInput, StringInput } from 'aitum.js/lib/inputs';
import { AitumCC } from 'aitum.js';
import { DeviceType } from 'aitum.js/lib/enums';
import { forEachChild } from 'typescript';

/*********** CONFIG ***********/
// The custom code action name
const name: string = 'GoXLR - Mute Fader';
const { goxlr } = require("goxlr");
const goxlrInstance = new goxlr();

enum Fader {
    A = 1,
    B = 2,
    C = 3,
    D = 4,
} 

let fader: number = 1;
let mute: boolean = false;

// The custom code inputs
const inputs: ICCActionInputs = {
    faderChannel: new IntInput('Fader', { required: true }),
    setMute: new BooleanInput('Mute', { required: true })
}

// The code executed.
async function method(inputs: { [key: string]: number | string | boolean | string[] }) {

    if (inputs.faderChannel as number > 4) {
        fader = 4;
    }
    else if (inputs.faderChannel as number < 1) {
        fader = 1;
    }
    else {
        fader = (inputs.faderChannel as number);
    }

    mute = inputs.setMute as boolean;

    
    muteFader(fader, mute);
}

async function muteFader(_fader: number, _mute: boolean) {
    console.log("Muting GoXLR Fader: " + Fader[_fader] + " to: " + _mute);
    if (_mute) {
        await goxlrInstance.setFaderMuteState(Fader[_fader].toString(), "MutedToX");
    }
    else {
        await goxlrInstance.setFaderMuteState(Fader[_fader].toString(), "Unmuted");
    }
}

/*********** DON'T EDIT BELOW ***********/
export default { name, inputs, method } as ICustomCode;