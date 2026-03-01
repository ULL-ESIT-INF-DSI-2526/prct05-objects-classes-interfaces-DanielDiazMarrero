import { Step } from './step'

export class Recipe {
  public name: string;
  public year: number;
  public steps: Step[];

  constructor(name: string, year: number, steps: Step[]) {
    this.name = name;
    this.year = year;
    this.steps = steps;
  }

  addStep(step: Step): void {
    this.steps.push(step);
  }

  getSteps(): Step[] {
    return this.steps;
  }

  countSteps(): number {
    return this.steps.length;
  }

  toTable(): Object {
    return {
      Name: this.name,
      Year: this.year,
      Steps: this.steps
    }
  }

  estimatedTime(): {min: number, max: number} {
    let estimated: number = 0;
    let optionalTime: number = 0;

    for (let i = 0; i < this.steps.length; i++) {
      estimated += this.steps[i].duration

      if (this.steps[i].optionalStep) {
        optionalTime += this.steps[i].duration
      }
    }

    let min = estimated - optionalTime;
    let max = estimated;

    return {min, max};
  }
}