import { BaseItem } from "./base_item";

export class BookChapter extends BaseItem {

  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    summary: string,
    publicationDate: Date,
    pages: string,
    publisher: string,
    public bookTitle: string
  ) {
    super(title, authors, keywords, summary, publicationDate, pages, publisher);
  }

  getIEEEReference(): string {
    return `${this.formatAuthorsIEEE()}, "${this.title}," in ${this.bookTitle}, ${this.publisher}, ${this.publicationDate.getFullYear()}, pp. ${this.pages}.`;
  }
}