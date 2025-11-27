import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return properties name and price', () => {
    const sut = createSut('Book', 5);
    expect(sut).toHaveProperty('name', 'Book');
    expect(sut.price).toBeCloseTo(5);
  });
});
