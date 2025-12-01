import { Vehicle } from '../../factory-method/vehicles/vehicle';
import { Customer } from '../customer/customer';

export interface CreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer;
  createVehicle(vehicleName: string, customerName: string): Vehicle;
}
