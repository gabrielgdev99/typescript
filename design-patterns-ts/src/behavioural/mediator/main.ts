import { Buyer } from './buyer';
import { Mediator } from './mediator';
import { Seller } from './seller';

const mediator = new Mediator();

const seller1 = new Seller();
seller1.addProdutc({ id: '1', name: 'Camiseta', price: 49.9 });
seller1.addProdutc({ id: '2', name: 'Caneta', price: 4.9 });

const seller2 = new Seller();
seller1.addProdutc({ id: '3', name: 'Camiseta', price: 40.9 });
seller1.addProdutc({ id: '4', name: 'Caneta', price: 2.9 });

mediator.addSeller(seller1, seller2);

const buyer = new Buyer(mediator);
buyer.viewProducts();
buyer.buy('2');
buyer.buy('3');
buyer.viewProducts();
