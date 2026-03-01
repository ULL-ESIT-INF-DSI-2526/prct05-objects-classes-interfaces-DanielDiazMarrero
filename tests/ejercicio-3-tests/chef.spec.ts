import { describe, test, expect } from "vitest";
import { Chef } from "../../src/ejercicio-3/chef";
import { Recipe } from "../../src/ejercicio-3/recipe";

describe("Chef", () => {

  test("Se crea correctamente", () => {
    const chef = new Chef("Ana", 1500, []);

    expect(chef.name).toBe("Ana");
    expect(chef.followers).toBe(1500);
  });

  test("Añade recetas correctamente", () => {
    const chef = new Chef("Luis", 800, []);
    chef.addRecipe(new Recipe("Paella", 2023, []));

    expect(chef.getRecipes().length).toBe(1);
  });

});