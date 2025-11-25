export class Person {
  constructor(
    public name: string,
    public lastName: string,
    private age: number,
    protected cpf: string
) {}

    getAge(): number {
        return this.age
    }

    getCpf(): string {
        return this.cpf
    }

    getFullName(): string {
        return `${this.name} ${this.lastName}`
    }
}

export class Student extends Person {
    getFullName(): string {
        return `This come from student ${this.name} ${this.lastName}`
    }
}
export class Client extends Person {
    getFullName(): string {
        return `This come from client ${this.name} ${this.lastName}`
    }
}

const student = new Student('Gabriel', 'Gonçalves', 25, '44577162865')
const client = new Client('Gabriel', 'Gonçalves', 25, '44577162865')
const person = new Person('Gabriel', 'Gonçalves', 25, '44577162865')

console.log(student.getFullName())
console.log(client.getFullName())
console.log(person.getFullName())
