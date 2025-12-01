import { ProductProtocol } from './product-protocol';

export class TShirt implements ProductProtocol {
  private name = 'Camieta';
  private price = 49.9;

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}
