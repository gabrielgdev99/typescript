import { RemoteControl } from './remote-control';

export class RemoteControlVolume extends RemoteControl {
  volumeUp(): void {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(this.device.getVolume() + 10);
    console.log(
      `${this.device.getName()} tinha o volume ${oldVolume} agora tem o ${this.device.getVolume()}`,
    );
  }
  volumeDown(): void {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(this.device.getVolume() - 10);
    console.log(
      `${this.device.getName()} tinha o volume ${oldVolume} agora tem o ${this.device.getVolume()}`,
    );
  }
}
