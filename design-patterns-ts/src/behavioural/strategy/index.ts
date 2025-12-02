import { NewDiscount } from './shpping-cart/discount-strategy';
import { ECommerceProductProtocol } from './shpping-cart/ecommerce-product-protocol';
import { ECommerceShoppingCart } from './shpping-cart/ecommerce-shopping-cart';

const shoppingCart = new ECommerceShoppingCart();
//shoppingCart.discount = new DefaultDiscount();
shoppingCart.discount = new NewDiscount();

shoppingCart.addProduct({ name: 'Produto 1', price: 50 });
shoppingCart.addProduct({ name: 'Produto 2', price: 50 });
shoppingCart.addProduct({ name: 'Produto 2', price: 50 });
shoppingCart.addProduct({ name: 'Produto 2', price: 50 });
shoppingCart.addProduct({ name: 'Produto 2', price: 50 });
shoppingCart.addProduct({ name: 'Produto 2', price: 50 });

console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());
