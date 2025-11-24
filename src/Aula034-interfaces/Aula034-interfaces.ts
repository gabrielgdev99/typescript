interface PersonName {
  name: string;
  lastName: string;
  fullName(): string;
};

interface PersonAge {
  age: number;
  height: number;
};

//type PersonType = PersonName & PersonAge //Union de types

interface PersonType extends PersonName, PersonAge {} //Union de interface


export class Person implements PersonName, PersonAge {
  constructor(
    public name: string,
    public lastName: string,
    public age: number,
    public height: number,
  ) {}

  fullName(): string {
    return (
      this.name + ' ' + this.lastName + ' - ' + this.age + ' - ' + this.height
    );
  }
}

const person = new Person('Gabriel', 'Gonçalves', 25, 1.8);
console.log(person.fullName());
