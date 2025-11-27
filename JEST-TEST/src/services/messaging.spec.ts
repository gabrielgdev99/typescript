import { Messaging } from "./messaging";

const createSut = () => {
    return new Messaging()
}

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefnied', () => {
    const sut = createSut();
    expect(sut.sendMessage('TESTE')).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with Message sended:, msg', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledWith('Message sended:', 'teste');
  });
});
