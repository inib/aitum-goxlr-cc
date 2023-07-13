import { ICCActionInputs, ICustomCode } from 'aitum.js/lib/interfaces';
import { BooleanInput, FloatInput, IntInput, StringInput } from 'aitum.js/lib/inputs';
import { AitumCC } from 'aitum.js';
import { DeviceType } from 'aitum.js/lib/enums';
import { forEachChild } from 'typescript';

/*********** CONFIG ***********/
// The custom code action name
const name: string = 'GoXLR - Enable FX';
const { goxlr } = require("goxlr");
const goxlrInstance = new goxlr();

let stateFX: boolean = true;

// The custom code inputs
const inputs: ICCActionInputs = {
    setFX: new BooleanInput('Enable FX', { required: true })
}

// The code executed.
async function method(inputs: { [key: string]: number | string | boolean | string[] }) {
    stateFX = inputs.setFX as boolean;
    toggleFX(stateFX);
}

async function toggleFX(_stateFX: boolean) {
    console.log("Switching GoXLR FX to: " + _stateFX);
    await goxlrInstance.setFXEnabled(_stateFX);
}

/*********** DON'T EDIT BELOW ***********/
export default { name, inputs, method } as ICustomCode;