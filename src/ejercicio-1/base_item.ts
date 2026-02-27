import { BibliographicItem } from "./bibliographic_item";

export abstract class BaseItem implements BibliographicItem {
    constructor(
      public title: string, 
      public authors: string[],
      public keywords: string[],
      public summary: string,
      public publicationDate: Date,
      public pages: string,
      public publisher: string
    ) {}

    /**
     * Método para las clases hijas. Para pasar de un string[] de autores a string
     * @returns Retorna un solo string con los autores
     */
    protected formatAuthorsIEEE(): string {
      return this.authors.join(", ");
    }

    /**
     * Cada clase hija debe tener este método, 
     * pero aqui no sabemos como implementarlo.
     */
    abstract getIEEEReference(): string;

    /**
     * Este método es concretamente para el uso de console.table() con objetos de nuestras clases.
     * Para mostrar solo la información que queremos de nuestros objetos y de forma simplificada.
     * (Nos evitamos información de más que puede hacer más difícil de leer)
     * @returns Retorna un objeto simplificado al que teniamos
     */
    toTableRow(): Object {
      return {
        Title: this.title,
        Authors: this.authors.join(", "),
        Keywords: this.keywords.join(", "),
        Date: this.publicationDate.getFullYear(),  // Solo el año de la fecha
        Publisher: this.publisher
      };
    }
}