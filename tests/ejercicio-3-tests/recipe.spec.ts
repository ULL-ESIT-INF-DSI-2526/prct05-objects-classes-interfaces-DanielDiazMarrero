import { describe, test, expect } from "vitest";
import { Recipe } from "../../src/ejercicio-3/recipe";
import { Step } from "../../src/ejercicio-3/step";

describe("Recipe", () => {

  test("Añade pasos correctamente", () => {
    const recipe = new Recipe("Tortilla", 2023, []);
    recipe.addStep(new Step("Batir huevos", 60, [], false, 0));

    expect(recipe.countSteps()).toBe(1);
  });

  test("Cuenta pasos correctamente", () => {
    const recipe = new Recipe("Pizza", 2022, []);

    recipe.addStep(new Step("Amasar", 300, [], false, 0));
    recipe.addStep(new Step("Hornear", 600, [], false, 0));

    expect(recipe.countSteps()).toBe(2);
  });

  test("Calcula tiempo total sin pasos opcionales", () => {
    const recipe = new Recipe("Pasta", 2020, []);

    recipe.addStep(new Step("Hervir agua", 300, [], false, 0));
    recipe.addStep(new Step("Cocer pasta", 600, [], false, 0));

    const time = recipe.estimatedTime();

    expect(time.min).toBe(900);
    expect(time.max).toBe(900);
  });

  test("Calcula tiempo con pasos opcionales", () => {
    const recipe = new Recipe("Ensalada", 2021, []);

    recipe.addStep(new Step("Cortar verduras", 200, [], false, 0));
    recipe.addStep(new Step("Añadir queso", 100, [], true, 0));

    const time = recipe.estimatedTime();

    expect(time.min).toBe(200);
    expect(time.max).toBe(300);
  });

});