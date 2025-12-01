import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Gabriel', '1A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Paola', '1A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Quirino', '20', 'Rua A', 'SP');
deliveryContext(factory, 'Andreia', '560', 'Rua A', 'SP');
deliveryContext(factory, 'Bruna', '2', 'Av Mexico', 'SP');

console.log();
console.log(factory.getLocations());
