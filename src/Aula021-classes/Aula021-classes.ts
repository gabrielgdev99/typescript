export class Company {
    public readonly name: string; //public não necessário
    private readonly emploeeys: Employee[] = [];
    protected readonly cnpj: string;

    constructor(name: string, cnpj: string) {
        this.name = name,
        this.cnpj = cnpj
    }

    addEmployee(employee: Employee): void {
        this.emploeeys.push(employee)
    }

    showEmployees(): void {
        for (const employee of this.emploeeys) {
            console.log(employee)
        }
    }

}

export class Employee {
    constructor(
        public readonly name: string,
        public readonly lastName: string
    ) {}
}

const company1 = new Company('Walmart', '12.123.123/1231-11')
const employee1 = new Employee('Gabriel', 'Gonçalves')
const employee2 = new Employee('Rodnei', 'Rodrigo')
const employee3 = new Employee('Wagner', 'Moura')

company1.addEmployee(employee1)
company1.addEmployee(employee2)
company1.addEmployee(employee3)
console.log(company1)
company1.showEmployees()
