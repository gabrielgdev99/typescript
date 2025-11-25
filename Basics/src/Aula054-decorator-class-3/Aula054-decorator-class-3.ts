function inverteNameAndColor(param1: string, param2: string) {
  // Closure
  return function <T extends new (...args: any[]) => any>(target: T): T {
    console.log("I'm the decorator", target);

    return class extends target {
      name: string;
      color: string;
      constructor(...args: any[]) {
        super(...args);
        this.name = this.inverse(args[0]);
        this.color = this.inverse(args[1]);
      }

      inverse(value: string): string {
        return value.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

@inverteNameAndColor('Another thing', 'Value2')
export class Animal {
  constructor(
    public name: string,
    public color: string,
  ) {
    console.log("I'm the class.");
  }
}

const animal = new Animal('Gabriel', 'purple');
console.log(animal);
