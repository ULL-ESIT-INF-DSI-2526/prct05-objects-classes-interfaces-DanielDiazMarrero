import { describe, test, expect } from "vitest";
import { Step } from "../../src/ejercicio-3/step";

describe("Step", () => {

  test("Se crea correctamente", () => {
    const step = new Step("Cortar cebolla", 120, ["corte"], false, 5);

    expect(step.name).toBe("Cortar cebolla");
    expect(step.duration).toBe(120);
    expect(step.optionalStep).toBe(false);
  });

  test("toTable devuelve objeto correcto", () => {
    const step = new Step("Freír", 200, ["cocción"], true, 3);
    const row = step.toTable();

    expect(row).toEqual({
      Name: "Freír",
      Duration: 200,
      Tags: "cocción",
      Optional: true,
      TimesCompleted: 3
    });
  });

});