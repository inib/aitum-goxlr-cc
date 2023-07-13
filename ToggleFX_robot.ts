import { ICCActionInputs, ICustomCode } from 'aitum.js/lib/interfaces';
import { BooleanInput, FloatInput, IntInput, StringInput } from 'aitum.js/lib/inputs';
import { AitumCC } from 'aitum.js';
import { DeviceType } from 'aitum.js/lib/enums';
import { forEachChild } from 'typescript';

/*********** CONFIG ***********/
// The custom code action name
const name: string = 'GoXLR - Enable Robot FX';
const { goxlr } = require("goxlr");
const goxlrInstance = new goxlr();

let robotFX: boolean = true;

// The custom code inputs
const inputs: ICCActionInputs = {
    setFXRobot: new BooleanInput('Enable Robot FX', { required: true })
}

// The code executed.
async function method(inputs: { [key: string]: number | string | boolean | string[] }) {
    robotFX = inputs.setFXRobot as boolean;
    toggleFXRobot(robotFX);
}

async function toggleFXRobot(_stateFX: boolean) {
    console.log("Switching GoXLR FX Robot to: " + _stateFX);
    await goxlrInstance.setRobotEnabled(_stateFX);
}

/*********** DON'T EDIT BELOW ***********/
export default { name, inputs, method } as ICustomCode;