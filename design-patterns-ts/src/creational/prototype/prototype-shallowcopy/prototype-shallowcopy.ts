export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(
    public name: string,
    public age: number,
  ) {}

  clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address {
  constructor(
    public street: string,
    public number: number,
  ) {}
}

const address1 = new Address('Av. Brasil', 15);
const person1 = new Person('Gabriel', 25);
const person2 = person1.clone();
person1.addAddress(address1);

console.log(person1);
person1.addresses[0].street = 'Outro endereço'
console.log(person2);
person2.name = 'Paola';
console.log(person2.addresses);
