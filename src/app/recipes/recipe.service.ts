import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  constructor() {}

  getRecipes() {
    const recipes = [];
    fetch("http://localhost:3000/hits")
      .then(response => response.json())
      .then(result =>
        result.forEach(item => {
          recipes.push(item.recipe.label);
        })
      );
    console.log(recipes);
  }
}
