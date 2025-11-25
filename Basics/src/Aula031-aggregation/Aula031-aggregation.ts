export class ShoppingCart {
  private readonly products: Product[] = [];

  addProducts(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product);
    }
  }

  quantProducts(): number {
    return this.products.length;
  }

  totalValue(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }
}

export class Product {
  constructor(
    public name: string,
    public price: number,
  ) {}
}

const product1 = new Product('Shirt', 39.9);
const product2 = new Product('Short', 25);
const product3 = new Product('Jeans', 89.9);
const shoppingCart = new ShoppingCart();

shoppingCart.addProducts(product1, product2, product3);
console.log(shoppingCart)
console.log(shoppingCart.quantProducts())
console.log(shoppingCart.totalValue());
