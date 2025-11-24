type Vehicle = {
  mark: string;
  year: string;
};

type Car = {
  brand: Vehicle['mark'];
  anno: Vehicle['year'];
  name: string;
};

const car: Car = {
  brand: 'ford',
  anno: '2020',
  name: 'Name',
};

console.log(car);
