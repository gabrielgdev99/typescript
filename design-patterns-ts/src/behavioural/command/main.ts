import { LightIntesityCommand } from './light-intesity-command';
import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-house-light';

// Receiver
const bedroomLight = new SmartHouseLight('Luz Quarto');
const bathroomLight = new SmartHouseLight('Luz Banheiro');

// Command
const bedroomLightPowerCommand = new LightPowerCommand(bedroomLight);
const bathroomLightPowerCommand = new LightPowerCommand(bathroomLight);
const bedroomIntensityCommand = new LightIntesityCommand(bedroomLight);

// Controle - Invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addComand('btn-bed', bedroomLightPowerCommand);
smartHouseApp.addComand('btn-bedInt', bedroomIntensityCommand);
smartHouseApp.addComand('btn-bath', bathroomLightPowerCommand);

smartHouseApp.executeCommand('btn-bed');
smartHouseApp.executeCommand('btn-bedInt');
smartHouseApp.executeCommand('btn-bedInt');
smartHouseApp.undoCommand('btn-bedInt');
smartHouseApp.undoCommand('btn-bed');
smartHouseApp.undoCommand('btn-bed');

smartHouseApp.executeCommand('btn-bath');
smartHouseApp.undoCommand('btn-bath');
smartHouseApp.undoCommand('btn-bath');
