export class Person {
  constructor(
    private name: string,
    private lastName: string,
    private age: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

const person = new Person('Gabriel', 'Gonçalves', 25, '445771628-65');

person.cpf = '123.123.123-12' // = usa o setter
console.log(person.cpf); // . usa o getter
