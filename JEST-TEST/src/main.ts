/*

Modulos de alto nivel não devem depender de modulos de baixo nivel. Ambos devem depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.

Classes de baixo nivel são classes que executam tarefas (os detalhes)
Classes de alto nivel são classes que gereciam as classes de baixo nivel.

Quanto mais abstrato mais alto nivel
Classe baixo nivel, implementa um metodo que faz alguma coisa

*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import {
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from './classes/discount';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';
import { MessagingProtocol } from './classes/interfaces/messaging-protocol';

const fiftyPercentDiscount = new FiftyPercentDiscount();
//const tenPercentDiscount = new TenPercentDiscount();
//const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
//const individualCustomer = new IndividualCustomer(
//  'Gabriel',
//  'Gonçalves',
//  '123.123.123-12',
//);
const enterpriseCustomer = new EnterpriseCustomer(
  'Company',
  '23.123.123/1212-12',
);


/* PARA TESTES

class MessagingMock implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log('MOCK MSG');
  }
}

const messagingMock = new MessagingMock();

*/
const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  enterpriseCustomer,
);

shoppingCart.addItem(new Product('Shirt', 25));
shoppingCart.addItem(new Product('Pen', 1.5));
shoppingCart.addItem(new Product('Book', 5));

console.log(order.orderStatus);
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkOut();
console.log(order.orderStatus);
