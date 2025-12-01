import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from './systema-user-protocol';

export class AdminUser implements SystemUserProtocol {
  public firstName: string;
  public userName: string;

  constructor(firstName: string, userName: string) {
    this.firstName = firstName;
    this.userName = userName;
  }

  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    return new Promise((res) => {
      return setTimeout(() => {
        return res([
          { street: 'Av Brasil', number: 500 },
          { street: 'Av Mexico', number: 300 },
        ]);
      }, 2000);
    });
  }
}
