import { ImageEditor } from './image-editor';
import { Memento } from './memento';

export class ImageEditorBackupManager {
  private mementos: Memento[] = [];
  constructor(private readonly originator: ImageEditor) {}

  backup(): void {
    console.log(`BACKUP: Salvando o estado de ImageEditor`);
    this.mementos.push(this.originator.save());
  }

  undo(): void {
    const memento = this.mementos.pop();

    if (!memento) {
      console.log(`Backup: no mementos.`);
      return;
    }

    this.originator.restore(memento);
    console.log(`Backup: ${memento.getName()} foi restaurado com sucesso.`);
  }

  showMementos(): void {
    for (const memento of this.mementos) {
      console.log(memento);
    }
  }
}
