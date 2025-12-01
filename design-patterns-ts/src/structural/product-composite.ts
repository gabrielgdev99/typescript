// COMPONENT
export abstract class ProductComponent {
  abstract getPrice(): number;

  add(product: ProductComponent): void {}
  remove(product: ProductComponent): void {}
}

// LEAF
export class ProductLeaf extends ProductComponent {
  constructor(
    public name: string,
    public price: number,
  ) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

// COMPOSITE
export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }

  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== 1) this.children.splice(productIndex, 1);
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}

// CLIENTE-CODE

const shirt = new ProductLeaf('Shirt', 40);
const car = new ProductLeaf('Car', 40_000);
const pen = new ProductLeaf('Pen', 5);
const productBox = new ProductComposite();
productBox.add(shirt, car, pen);
console.log(productBox);
console.log(productBox.getPrice());
productBox.remove(shirt);

const tablet = new ProductLeaf('Tablet', 2_000);
const kindle = new ProductLeaf('Kindle', 1_000);
const anotherProductBox = new ProductComposite();
anotherProductBox.add(tablet, kindle);
productBox.add(anotherProductBox);

console.log(productBox.getPrice());
