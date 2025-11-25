export class Person {
  static standardAge = 0;
  static standardCpf = '000.000.000-00';

  constructor(
    public name: string,
    public lastName: string,
    public age: number,
    public cpf: string,
  ) {}

  normalMethod(): void {
    console.log(Person.standardAge, Person.standardCpf)
  }

  static createPerson(name: string, lastName: string): Person {
    return new Person(name, lastName, Person.standardAge, Person.standardCpf);
  }
}

const person = new Person('Gabriel', 'Gonçalves', 25, '445771628-65');
const person1 = Person.createPerson('Jorge', 'Bem');

console.log(person, person1);
console.log(person.normalMethod())
console.log(Person.standardAge, Person.standardCpf)
