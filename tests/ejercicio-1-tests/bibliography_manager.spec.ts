import { describe, test, expect, beforeEach } from "vitest";
import { BibliographyManager } from "../../src/ejercicio-1/bibliography_manager";
import { JournalArticle } from "../../src/ejercicio-1/journal_article";
import { BookChapter } from "../../src/ejercicio-1/book_chapter";

describe("BibliographyManager - Storage", () => {

  let manager: BibliographyManager;

  beforeEach(() => {
    manager = new BibliographyManager();
  });

  test("Stores multiple items", () => {

    manager.addItem(new JournalArticle(
      "Test",
      ["A"],
      ["AI"],
      "Summary",
      new Date(2022,0,1),
      "1-2",
      "IEEE",
      1,
      1
    ));

    expect(manager.search({}).length).toBe(1);
  });

});

describe("BibliographyManager - Search", () => {

  let manager: BibliographyManager;

  beforeEach(() => {
    manager = new BibliographyManager();

    manager.addItem(new JournalArticle(
      "AI in Medicine",
      ["John"],
      ["AI"],
      "Summary",
      new Date(2022,0,1),
      "1-2",
      "IEEE",
      1,
      1
    ));

    manager.addItem(new BookChapter(
      "Deep Learning",
      ["Carlos"],
      ["AI"],
      "Summary",
      new Date(2020,0,1),
      "10-20",
      "Springer",
      "Book"
    ));
  });

  test("Search by keyword", () => {
    expect(manager.search({ keyword: "AI" }).length).toBe(2);
  });

  test("Search by year", () => {
    expect(manager.search({ year: 2022 }).length).toBe(1);
  });

  test("Search by publisher", () => {
    expect(manager.search({ publisher: "Springer" }).length).toBe(1);
  });

});

describe("BibliographyManager - Export IEEE", () => {

  let manager: BibliographyManager;

  beforeEach(() => {
    manager = new BibliographyManager();

    manager.addItem(new JournalArticle(
      "AI in Medicine",
      ["John"],
      ["AI"],
      "Summary",
      new Date(2022,0,1),
      "1-2",
      "IEEE",
      1,
      1
    ));
  });

  test("Exports IEEE references", () => {
    const results = manager.search({});
    const exported = manager.exportIEEE(results);

    expect(exported.length).toBe(1);
    expect(exported[0]).toContain("AI in Medicine");
  });

});