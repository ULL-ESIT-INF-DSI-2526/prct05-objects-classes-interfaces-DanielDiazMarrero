import { Chef } from "./chef";
import { Recipe } from "./recipe";
import { Step } from "./step";

export class RecipeSystem {
  private chefs: Chef[] = [];

  // Habría que poner un setter getter estándar. Puede que convenga más
  addChef(chef: Chef): void {
    this.chefs.push(chef);
  }

  getChefs(): Chef[] {
    return this.chefs;
  }

  searchChef(name: string): Chef[] {
    return this.chefs.filter(c =>
      c.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  searchRecipe(name: string): Recipe[] {
    const results: Recipe[] = [];

    for (const chef of this.chefs) {
      for (const recipe of chef.getRecipes()) {
        if (recipe.name.toLowerCase().includes(name.toLowerCase())) {
          results.push(recipe);
        }
      }
    }

    return results;
  }

  searchStep(name: string): Step[] {
    const results: Step[] = [];

    for (const chef of this.chefs) {
      for (const recipe of chef.getRecipes()) {
        for (const step of recipe.getSteps()) {
          if (step.name.toLowerCase().includes(name.toLowerCase())) {
            results.push(step);
          }
        }
      }
    }

    return results;
  }

  // Para printear usamos un map para obtener un array con los elementos pasados ya a Object por toTable
  printChefs(): void {
    console.table(this.chefs.map(c => c.toTable()));
  }

  printRecipes(recipes: Recipe[]): void {
    console.table(recipes.map(r => r.toTable()));
  }

  printSteps(steps: Step[]): void {
    console.table(steps.map(s => s.toTable()));
  }
}