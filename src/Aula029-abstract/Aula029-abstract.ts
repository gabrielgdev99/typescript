export abstract class Character {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected atack: number,
    protected life: number,
  ) {}

  hit(Character: Character): void {
    this.speech();
    Character.lostLife(this.atack);
  }

  lostLife(atackStrength: number): void {
    this.life -= atackStrength;
    console.log(`${this.name} now have ${this.life} of life.`);
  }

  abstract speech(): void;
}

class Warrior extends Character {
  protected emoji = '\u{1F9DD}';

  speech(): void {
    console.log(`${this.emoji} WARRIORRSSSSSSSSSSS ATAAAAAAAAACK!`);
  }
}
class Sorcere extends Character {
  protected emoji = '\u{1F9DF}';

  speech(): void {
    console.log(`${this.emoji} SORCERERRRRRS HOOOOOOLD!`);
  }
}

const warrior = new Warrior('Vladimir', 100, 1000);
const sorcere = new Sorcere('Maria', 87, 1000);

warrior.hit(sorcere);
sorcere.hit(warrior);
warrior.hit(sorcere);
sorcere.hit(warrior);
warrior.hit(sorcere);
sorcere.hit(warrior);
