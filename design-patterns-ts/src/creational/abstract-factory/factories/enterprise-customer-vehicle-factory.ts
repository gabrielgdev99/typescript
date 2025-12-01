import { VehicleProtocol } from '../vehicle/vehicle-protocol';
import { Customer } from '../customer/customer';
import { EnterpriseCustomer } from '../customer/enterprise-customer';
import { EnterpriseVehicle } from '../vehicle/enterprise-car';

export class EnterpriseCreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName);
    return new EnterpriseVehicle(vehicleName, customer);
  }
}
