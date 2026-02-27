import { BaseItem } from "./base_item";

export class JournalArticle extends BaseItem {
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    summary: string,
    publicationDate: Date,
    pages: string,
    publisher: string,
    public volume: number,
    public issue: number
  ) {
    super(title, authors, keywords, summary, publicationDate, pages, publisher)
  }

  getIEEEReference(): string {  // Se puede hacer concatenando strings con + también.  Las comillas `´ hace que todo lo que esté dentro sea un string
    return `${this.formatAuthorsIEEE()}, "${this.title}," ${this.publisher}, vol. ${this.volume}, no. ${this.issue}, pp. ${this.pages}, ${this.publicationDate.getFullYear()}.`;
  }
}