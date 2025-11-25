// Type Record
const obj1: Record<string, string | number> = {
  name: 'Gabriel',
  lastName: 'Gonçalves',
  age: 25,
};

type PersonProtocol = {
  name?: string;
  lastName?: string;
  age?: number;
};

// Type Required (Transforma o que é opcional em obrigatório)
type RequiredPerson = Required<PersonProtocol>;

// Type Partial (Transforma o que é obrigatório em opcional)
type PartialPerson = Partial<RequiredPerson>;

// Type Readonly
type ReadonlyPerson = Readonly<RequiredPerson>;

// Type Pick
type PickPerson = Pick<RequiredPerson, 'name' | 'lastName'>;

const obj2: PersonProtocol = {
  name: 'Gabriel',
  lastName: 'Gonçalves',
  age: 25,
};

// Extract e Exclude

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type ExcludeType = Exclude<ABC, CDE>;
type ExtractType = Extract<ABC, CDE>;

//
type AccountMongo = {
  _id: string;
  name: string;
  age: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'asdjasidjaisd31',
  name: 'Gabriel',
  age: 25,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log('API');
console.log(accountApi);

export default 1;
