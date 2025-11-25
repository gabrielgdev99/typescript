function inverteNameAndColor<T extends new (...args: any[]) => any>(
  target: T,
): T {
    console.log('I\'m the decorator', target)

  return class extends target {
    name: string;
    color: string;
    constructor(...args: any[]) {
      super(...args);
      this.name = this.inverse(args[0]);
      this.color = this.inverse(args[1]);
    }

    inverse(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

@inverteNameAndColor //Colocando isso ele chamada o decorator
export class Animal {
  constructor(
    public name: string,
    public color: string,
  ) {
    console.log('I\'m the class.')
  }
}

const animal = new Animal('Gabriel', 'purple');
console.log(animal);
