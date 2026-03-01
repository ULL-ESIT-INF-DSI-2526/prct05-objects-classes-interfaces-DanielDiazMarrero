export class Step {
  public name: string;
  public duration: number;
  public tags: string[];
  public optionalStep: boolean;
  private _nCompleted: number;

  constructor(name: string, duration: number, tags: string[], optionalStep: boolean, nCompleted: number) {
    this.name = name;
    this.duration = duration;
    this.tags = tags;
    this.optionalStep = optionalStep;
    this._nCompleted = nCompleted;
  }

  get nCompleted(): number {
    return this.nCompleted;
  }

  set nCompleted(nCompleted: number) {
    this._nCompleted = nCompleted;
  }

  toTable(): Object {
    return {
      Name: this.name,
      Duration: this.duration,
      Tags: this.tags.join(", "),
      Optional: this.optionalStep,
      TimesCompleted: this._nCompleted
    }
  }
}