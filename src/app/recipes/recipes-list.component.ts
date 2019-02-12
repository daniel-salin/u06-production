import { Component, OnInit } from "@angular/core";
import { RecipeService } from "./recipe.service";
import { observable } from "rxjs";
import { Recipes } from "./recipe.model";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"]
})
export class RecipesListComponent implements OnInit {
  query: string;
  recipes: Recipes[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}
  /**
   * This method uses the retrieved uri id parameter to extract an id.
   * Using this ID for own API later.
   */
  // pagination() {
  //   history.pushState(null, '', '/recipes?page=2');
  // }

  searchRecipes() {
    const RECIPES = [];
    this.recipeService
      .queryRecipes(this.query)
      .subscribe(data => {
        data.hits.forEach(element => {
          let uri = element.recipe.uri;
          let uriSplit = uri.split("_");
          let id = uriSplit[1];
          let title = element.recipe.label;
          let image = element.recipe.image;
          let url = element.recipe.url;
          RECIPES.push(new Recipes(id, title, image, url));
        });
        this.recipes = RECIPES;
        console.log(this.recipes);
      });
  }
}
