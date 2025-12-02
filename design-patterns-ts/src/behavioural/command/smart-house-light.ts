export class SmartHouseLight {
  private isOn = false;
  private intesity = 50;

  constructor(public name: string) {}

  getPowerStatus(): string {
    return this.isOn ? 'ON' : 'OFF';
  }

  on(): boolean {
    this.isOn = true;
    console.log(`${this.name} agora está ${this.getPowerStatus()}`);
    return this.isOn;
  }

  off(): boolean {
    if (!this.isOn) {
      console.log(`A luz já está ${this.getPowerStatus()}`);
      return this.isOn;
    }
    this.isOn = false;
    console.log(`${this.name} agora está ${this.getPowerStatus()}`);
    return this.isOn;
  }

  increaseIntensity(): number {
    if (this.intesity >= 100) return this.intesity;
    this.intesity += 10;
    return this.intesity;
  }

  decreaseIntensity(): number {
    if (this.intesity <= 0) return this.intesity;
    this.intesity -= 10;
    return this.intesity;
  }
}
