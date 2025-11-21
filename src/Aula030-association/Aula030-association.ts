export class Writer {
  private _tool: Tool | null = null;

  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set tool(tool: Tool | null) {
    this._tool = tool;
  }

  get tool(): Tool | null {
    return this._tool;
  }

  writing(): void {
    if (this.tool === null) {
      console.log('Cant writing whitout a tool.');
      return;
    }
    this.tool.writing();
  }
}

export abstract class Tool {
  constructor(private _name: string) {}
  abstract writing(): void;

  get name(): string {
    return this._name;
  }
}

export class Pen extends Tool {
  writing(): void {
    console.log(`${this.name} are writing.`);
  }
}

export class TypingMachine extends Tool {
  writing(): void {
    console.log(`${this.name} are typing..`);
  }
}

const writer = new Writer('Gabriel');
const pen = new Pen('Bic');
const typingMachine = new TypingMachine('LG');

console.log(writer.name)
//console.log(pen.name)
//console.log(typingMachine.name)

writer.tool = pen
writer.tool = typingMachine
//writer.tool = null
console.log(writer.writing())

