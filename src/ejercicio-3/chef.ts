import { Recipe } from "./recipe"

export class Chef {
  public name: string;
  public followers: number;
  public recipeBook: Recipe[];

  constructor(name: string, followers: number, recipeBook: Recipe[]) {
    this.name = name;
    this.followers = followers;
    this.recipeBook = recipeBook;
  }

  addRecipe(recipe: Recipe): void {
    this.recipeBook.push(recipe)
  }

  getRecipes(): Recipe[] {
    return this.recipeBook;
  }

  toTable(): Object {
    return {
      Name: this.name,
      Followers: this.followers,
      RecipeBook: this.recipeBook
    }
  }
}