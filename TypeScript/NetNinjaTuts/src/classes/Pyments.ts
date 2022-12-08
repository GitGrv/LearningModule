import { HasFormatter } from "../Interfaces/HasFormatter.js";

export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ){}

  format() {
      return `${this.recipient} owes rs${this.amount} for ${this.details}`;
  }
}
