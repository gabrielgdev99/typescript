//DECLARATION MERGE

interface Person {
  name: string;
}

interface Person {
  readonly lastName: string;
}

interface Person {
  readonly adress: string[]; //Se colocar o readonly antes da 'string' vc define que não é mutavel o array
}

interface Person {
  age?: number; //O ? deixa como opcional
}

const person: Person = {
  name: 'Gabriel',
  lastName: 'Gonçalves',
  adress: ['Av Brasil'],
  age: 25,
};

person.adress.push('Rua Manoel');
console.log(person);
