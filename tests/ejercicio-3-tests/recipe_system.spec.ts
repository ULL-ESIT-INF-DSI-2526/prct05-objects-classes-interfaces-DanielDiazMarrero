import { describe, test, expect } from "vitest";
import { RecipeSystem } from "../../src/ejercicio-3/recipe_system";
import { Chef } from "../../src/ejercicio-3/chef";
import { Recipe } from "../../src/ejercicio-3/recipe";
import { Step } from "../../src/ejercicio-3/step";

describe("RecipeSystem", () => {

  test("Añade chefs correctamente", () => {
    const system = new RecipeSystem();
    const chef = new Chef("Carlos", 1000, []);

    system.addChef(chef);

    expect(system.getChefs().length).toBe(1);
  });

  test("Busca chef por nombre", () => {
    const system = new RecipeSystem();
    system.addChef(new Chef("Carlos", 1000, []));
    system.addChef(new Chef("Ana", 500, []));

    const result = system.searchChef("car");

    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Carlos");
  });

  test("Busca receta por nombre", () => {
    const system = new RecipeSystem();

    const chef = new Chef("Luis", 800, []);
    chef.addRecipe(new Recipe("Tarta", 2022, []));

    system.addChef(chef);

    const result = system.searchRecipe("tarta");

    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Tarta");
  });

  test("Busca paso por nombre", () => {
    const system = new RecipeSystem();

    const chef = new Chef("Maria", 900, []);
    const recipe = new Recipe("Sopa", 2021, []);

    recipe.addStep(new Step("Hervir agua", 300, [], false, 0));
    chef.addRecipe(recipe);
    system.addChef(chef);

    const result = system.searchStep("hervir");

    expect(result.length).toBe(1);
    expect(result[0].name).toBe("Hervir agua");
  });

});