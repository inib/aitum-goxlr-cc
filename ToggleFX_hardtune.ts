import { ICCActionInputs, ICustomCode } from 'aitum.js/lib/interfaces';
import { BooleanInput, FloatInput, IntInput, StringInput } from 'aitum.js/lib/inputs';
import { AitumCC } from 'aitum.js';
import { DeviceType } from 'aitum.js/lib/enums';
import { forEachChild } from 'typescript';

/*********** CONFIG ***********/
// The custom code action name
const name: string = 'GoXLR - Enable Hardtune FX';
const { goxlr } = require("goxlr");
const goxlrInstance = new goxlr();

let hardtuneFX: boolean = true;

// The custom code inputs
const inputs: ICCActionInputs = {
    setFXHardTune: new BooleanInput('Enable Hardtune FX', { required: true })
}

// The code executed.
async function method(inputs: { [key: string]: number | string | boolean | string[] }) {
    hardtuneFX = inputs.setFXHardTune as boolean;
    toggleFXHardTune(hardtuneFX);
}

async function toggleFXHardTune(_stateFX: boolean) {
    console.log("Switching GoXLR FX HardTune to: " + _stateFX);
    await goxlrInstance.setHardTuneEnabled(_stateFX);
}

/*********** DON'T EDIT BELOW ***********/
export default { name, inputs, method } as ICustomCode;