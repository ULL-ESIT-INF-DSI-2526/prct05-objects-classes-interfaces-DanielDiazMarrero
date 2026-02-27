import { describe, test, expect } from "vitest";
import { JournalArticle } from "../../src/ejercicio-1/journal_article";

describe("JournalArticle", () => {

  const article = new JournalArticle(
    "AI in Medicine",
    ["John Smith", "Ana Pérez"],
    ["AI", "Medicine"],
    "Study about AI",
    new Date(2022, 0, 1),
    "12-20",
    "IEEE Journal",
    10,
    2
  );

  test("Se crea la referencia IEEE correcta", () => {
    const ref = article.getIEEEReference();
    expect(ref).toContain("vol. 10");
    expect(ref).toContain("no. 2");
    expect(ref).toContain("2022");
  });

  test("Table row conversion", () => {
    const row = article.toTableRow();
    expect(row).toHaveProperty("Title", "AI in Medicine");
  });

});