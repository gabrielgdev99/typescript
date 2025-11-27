import { EnterpriseCustomer, IndividualCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('Individual Customer', () => {
  it('should have firstName, lastName, cpf', () => {
    const sut = createIndividualCustomer(
      'Gabriel',
      'Gonçalves',
      '123.123.123-12',
    );
    expect(sut).toHaveProperty('firstName', 'Gabriel');
    expect(sut).toHaveProperty('lastName', 'Gonçalves');
    expect(sut).toHaveProperty('cpf', '123.123.123-12');
  });

  it('should have methods to get name and idn for individual customers', () => {
    const sut = createIndividualCustomer(
      'Gabriel',
      'Gonçalves',
      '123.123.123-12',
    );
    expect(sut.getName()).toBe('Gabriel Gonçalves');
    expect(sut.getIDN()).toBe('123.123.123-12');
  });
});

describe('Enterprise Customer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Company', '12.123.123/1231-12');
    expect(sut).toHaveProperty('name', 'Company');
    expect(sut).toHaveProperty('cnpj', '12.123.123/1231-12');
  });
  it('should have methods to get name and idn for enterprise customers', () => {
    const sut = createEnterpriseCustomer('Company', '12.123.123/1231-12');
    expect(sut.getName()).toBe('Company');
    expect(sut.getIDN()).toBe('12.123.123/1231-12');
  });
});
