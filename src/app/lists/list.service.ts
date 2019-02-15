import { Injectable } from "@angular/core";
import { Lists } from "./list.model";
import { Recipes } from "../recipes/recipe.model";

@Injectable({
  providedIn: "root"
})
export class ListService {
  list: Lists[];
  recipes: Recipes[] = [];
  constructor() {}

  getListContent() {
    return this.list;
  }

  /**
   * This methods store the recipe objects so that they can be referenced
   * when retriving lists without making a new API-request for each
   * individual recipe.
   */

  addRecipe(recipe) {
    const RECIPES = [];
    const LIST = [];
    if (this.recipes.includes(recipe)) {
      alert("already added this recipe");
    } else {
      this.recipes.push(recipe);
    }
    this.recipes.forEach(element => {
      RECIPES.push({ title: element[0].title, id: element[0].id.id });
    });

    LIST.push(new Lists("My List of Recipes", RECIPES));

    this.list = LIST;
  }
}
