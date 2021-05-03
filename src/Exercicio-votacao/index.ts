type VotationOption = {
  numberOfVotes: number;
  option: string;
};

export class Votation {
  private _votationsOptions: VotationOption[] = [];

  constructor(public details: string) {}

  public get votationsOptions(): VotationOption[] {
    return this._votationsOptions;
  }

  public set votationsOptions(votationOption: VotationOption[]) {
    this._votationsOptions = votationOption;
  }

  public addVotationOption(votationOption: VotationOption): void {
    this._votationsOptions.push(votationOption);
  }

  public vote(votationIndex: number): void {
    if (this.votationsOptions[votationIndex])
      this.votationsOptions[votationIndex].numberOfVotes++;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  public addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  public showVotations(): void {
    this.votations.forEach((votatio) => {
      console.log(votatio.details);

      votatio.votationsOptions.forEach(({ option, numberOfVotes }) => {
        console.log(`${option}: ${numberOfVotes}`);
      });
    });
  }
}

const votation1 = new Votation('Qual sua linguagem de programação favorita?');

votation1.addVotationOption({ option: 'Python', numberOfVotes: 0 });
votation1.addVotationOption({ option: 'JavaScript', numberOfVotes: 0 });
votation1.vote(1);
votation1.addVotationOption({ option: 'TypeScript', numberOfVotes: 0 });

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.showVotations();
