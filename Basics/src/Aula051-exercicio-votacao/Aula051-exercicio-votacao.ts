type VotationOption = {
  votes: number;
  option: string;
};

//
export class Votation {
  private _votationOptions: VotationOption[] = [];

  constructor(public details: string) {}

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].votes += 1;
  }

  get votationOption(): VotationOption[] {
    return this._votationOptions;
  }
}

//
export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOption of votation.votationOption) {
        console.log(votationOption.option, votationOption.votes);
      }
      console.log('###');
      console.log('');
    }
  }
}

const votation1 = new Votation('What is your favorite programming language?');
votation1.addVotationOption({ option: 'PHP', votes: 0 });
votation1.addVotationOption({ option: 'JS', votes: 0 });
votation1.addVotationOption({ option: 'Python', votes: 0 });
votation1.vote(2);
votation1.vote(1);
votation1.vote(0);
votation1.vote(1);

const votation2 = new Votation('What is your favorite color');
votation2.addVotationOption({ option: 'Green', votes: 0 });
votation2.addVotationOption({ option: 'Red', votes: 0 });
votation2.addVotationOption({ option: 'Blue', votes: 0 });
votation2.addVotationOption({ option: 'Purple', votes: 0 });
votation2.vote(2);
votation2.vote(1);
votation2.vote(1);
votation2.vote(1);
votation2.vote(3);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.addVotation(votation2);

votationApp.showVotations();
