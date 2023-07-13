import { ICCActionInputs, ICustomCode } from 'aitum.js/lib/interfaces';
import { BooleanInput, FloatInput, IntInput, StringInput } from 'aitum.js/lib/inputs';
import { AitumCC } from 'aitum.js';
import { DeviceType } from 'aitum.js/lib/enums';
import { forEachChild } from 'typescript';

/*********** CONFIG ***********/
// The custom code action name
const name: string = 'GoXLR - Enable Megaphone FX';
const { goxlr } = require("goxlr");
const goxlrInstance = new goxlr();

let megaphoneFX: boolean = true;

// The custom code inputs
const inputs: ICCActionInputs = {
    setFXMegaphone: new BooleanInput('Enable Megaphone', { required: true })
}

// The code executed.
async function method(inputs: { [key: string]: number | string | boolean | string[] }) {
    megaphoneFX = inputs.setFXMegaphone as boolean;
    toggleFXMegaphone(megaphoneFX);
}

async function toggleFXMegaphone(_stateFX: boolean) {
    console.log("Switching GoXLR FX Megaphone to: " + _stateFX);
    await goxlrInstance.setMegaphoneEnabled(_stateFX);
}

/*********** DON'T EDIT BELOW ***********/
export default { name, inputs, method } as ICustomCode;