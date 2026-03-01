import { BaseItem } from "./base_item";

export class Thesis extends BaseItem {

  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    summary: string,
    publicationDate: Date,
    pages: string,
    publisher: string,
    public degree: "TFG" | "TFM" | "PhD"
  ) {
    super(title, authors, keywords, summary, publicationDate, pages, publisher);
  }

  getIEEEReference(): string {
    return `${this.formatAuthorsIEEE()}, "${this.title}," ${this.degree} thesis, ${this.publisher}, ${this.publicationDate.getFullYear()}.`;
  }
}