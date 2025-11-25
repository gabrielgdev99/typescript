function decorator(value: any, context: any): void {
  console.log(value);
  console.log(context);
  return;
}

export class OnePerson {
  name: string;
  lastName: string;
  age: number;

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
  @decorator
  method(msg: string): string {
    return `${this.name} ${this.lastName}: ${msg}`;
  }

  get fullName(): string {
    return this.name + '' + this.lastName;
  }

  set fullName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.lastName = words.join(' ');
  }
}

const person = new OnePerson('Gabriel', 'Gonçalves', 25);
const method = person.method('Hello World!');
console.log(method);
