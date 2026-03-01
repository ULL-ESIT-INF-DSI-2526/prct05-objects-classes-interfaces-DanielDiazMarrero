import { describe, test, expect } from "vitest";
import { Thesis } from "../../src/ejercicio-1/thesis";

describe("Thesis", () => {

  const thesis = new Thesis(
    "Machine Learning Optimization",
    ["Laura Gómez"],
    ["ML", "Optimization"],
    "Optimization methods",
    new Date(2021, 0, 1),
    "1-120",
    "ULL",
    "TFG"
  );

  test("Generates correct IEEE reference", () => {
    const ref = thesis.getIEEEReference();
    expect(ref).toContain("TFG thesis");
    expect(ref).toContain("2021");
  });

});