import { describe, test, expect } from "vitest";
import { BookChapter } from "../../src/ejercicio-1/book_chapter";

describe("BookChapter", () => {

  const chapter = new BookChapter(
    "Deep Learning Basics",
    ["Carlos Ruiz"],
    ["AI", "Deep Learning"],
    "Intro to DL",
    new Date(2020, 0, 1),
    "50-70",
    "Springer",
    "Advances in AI"
  );

  test("Generates correct IEEE reference", () => {
    const ref = chapter.getIEEEReference();
    expect(ref).toContain("Advances in AI");
    expect(ref).toContain("2020");
  });

});