export interface BibliographicItem {
  getIEEEReference(): string;
  toTableRow(): Object;
}