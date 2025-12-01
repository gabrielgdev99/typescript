import { Radio } from './device/radio';
import { TV } from './device/tv';
import { RemoteControl } from './remote-control/remote-control';
import { RemoteControlVolume } from './remote-control/remote-control-volume';

export function clientCode(
  abstraction: RemoteControl | RemoteControlVolume,
): void {
  abstraction.togglePower(); // true

  // Type Guard
  if (!('volumeUp' in abstraction)) return;

  abstraction.volumeUp(); // 20
  abstraction.volumeUp(); // 30
  abstraction.volumeDown(); // 40
}

const tv = new TV();
const radio = new Radio();
const radioRemoteControl = new RemoteControl(radio);
clientCode(radioRemoteControl);
const tvRemoteControl = new RemoteControlVolume(tv);
clientCode(tvRemoteControl);
