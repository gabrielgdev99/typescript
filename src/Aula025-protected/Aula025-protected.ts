export class Company {
  readonly name: string; //public não necessário
  protected readonly emploeeys: Employee[] = [];
  private readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    ((this.name = name), (this.cnpj = cnpj));
  }

  addEmployee(employee: Employee): void {
    this.emploeeys.push(employee);
  }

  showEmployees(): void {
    for (const employee of this.emploeeys) {
      console.log(employee);
    }
  }
}

export class Walmart extends Company {
  constructor() {
    super('Walmart', '12.123.123/1231-11');
  }

  popEmployee(): Employee | null {
    const employee = this.emploeeys.pop();
    if (employee) return employee;
    return null;
  }
}

export class Employee {
  constructor(
    public readonly name: string,
    public readonly lastName: string,
  ) {}
}

const company1 = new Walmart();
const employee1 = new Employee('Gabriel', 'Gonçalves');
const employee2 = new Employee('Rodnei', 'Rodrigo');
const employee3 = new Employee('Wagner', 'Moura');

company1.addEmployee(employee1);
company1.addEmployee(employee2);
company1.addEmployee(employee3);
const employeeRemoved = company1.popEmployee()
console.log(employeeRemoved)
console.log(company1.name);
