import { BaseItem } from "./base_item";

export class BibliographyManager {

  private items: BaseItem[] = [];

  addItem(item: BaseItem): void {
    this.items.push(item);
  }

  showAll(): void {
    console.table(this.items.map(item => item.toTableRow()));
  }

  search(filters: {
    keyword?: string;
    title?: string;
    author?: string;
    year?: number;
    publisher?: string;
  }): BaseItem[] {

    return this.items.filter(item => {

      if (filters.keyword && !item.keywords.includes(filters.keyword))
        return false;

      if (filters.title && !item.title.includes(filters.title))
        return false;

      if (filters.author && !item.authors.some(a => a.includes(String(filters.author))))
        return false;

      if (filters.year && item.publicationDate.getFullYear() !== filters.year)
        return false;

      if (filters.publisher && !item.publisher.includes(filters.publisher))
        return false;

      return true;
    });
  }

  showSearchResults(results: BaseItem[]): void {
    console.table(results.map(r => r.toTableRow()));
  }

  exportIEEE(results: BaseItem[]): string[] {
    return results.map(r => r.getIEEEReference());
  }
}