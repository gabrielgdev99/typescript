import { SmartHouseCommand } from './smart-house-command';
import { SmartHouseLight } from './smart-house-light';

export class LightIntesityCommand implements SmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}

  execute(): void {
    const intensity = this.light.increaseIntensity();
    console.log(`Intesidade da luz ${this.light.name} é ${intensity}`);
  }

  undo(): void {
    const intensity = this.light.decreaseIntensity();
    console.log(`Intesidade da luz ${this.light.name} é ${intensity}`);
  }
}
