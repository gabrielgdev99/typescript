function decorator(
  value: undefined,
  context: ClassFieldDecoratorContext,
): void {
  console.log(value);
  console.log(context);
  return;
}

function decoratorGet(value: any, context: any): void | (() => string) {
  if (context.kind === 'getter') {
    return function (this: any) {
      console.log('Access:', context.name);
      return value.call(this);
    };
  }
}

function decoratorSet(
  value: (newValue: any) => void,
  context: ClassSetterDecoratorContext,
): void | ((newValue: any) => void) {
  return function (this: any, newValue: any): void {
    const name = String(context.name);
    console.log(`Setting ${name} = `, newValue);
    value.call(this, newValue);
  };
}

export class OnePerson {
  name: string;
  @decorator
  lastName: string;
  age: number;

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  method(msg: string): string {
    return `${this.name} ${this.lastName}: ${msg}`;
  }

  @decoratorGet
  get fullName(): string {
    return this.name + '' + this.lastName;
  }

  @decoratorSet
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

person.fullName = 'Teste'
console.log(person.fullName)
