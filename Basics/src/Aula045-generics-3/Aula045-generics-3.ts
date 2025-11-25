interface PersonProtocol<T = string, U = number> {
  name: T;
  lastName: T;
  age: U;
}

const student: PersonProtocol = {
  name: 'Gabriel',
  lastName: 'Gonçalves',
  age: 25,
};

const student2: PersonProtocol<number, number> = {
  name: 2,
  lastName: 3,
  age: 25,
};

console.log(student, student2);
