type PersonType = {
  name: string;
  lastName: string;
  fullName(): string;
};

type PersonAge = {
  age: number;
  height: number;
};

export class Person implements PersonType, PersonAge {
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
