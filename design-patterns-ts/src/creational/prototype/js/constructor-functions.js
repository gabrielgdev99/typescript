function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'Gabriel',
  lastName: 'Gonçalves',
  age: 25,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

const person1 = new Person('Gabriel', 'Gonçalves', 25);

console.log(person1.fullName());
