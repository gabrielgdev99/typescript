export class Car {
  private readonly engine: Engine = new Engine();

  turnOn(): void {
    this.engine.turnOn()
  }

  acelerate(): void {
    this.engine.acelerate()
  }

  stop(): void {
    this.engine.stop()
  }

  turnOff(): void {
    this.engine.turnOff()
  }
}

export class Engine {
  turnOn(): void {
    console.log('Engine is on');
  }

  acelerate(): void {
    console.log('Car is moving');
  }

  stop(): void {
    console.log('Car is stoping');
  }

  turnOff(): void {
    console.log('Engine is off');
  }
}

const car = new Car();
car.turnOn()
car.turnOff()
car.acelerate()
car.stop()
