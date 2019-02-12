import { Component, OnInit } from "@angular/core";
import {} from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { RecipeService } from "./recipe.service";
import { Recipes } from "./recipe.model";



@Component({
  selector: "app-recipes-details",
  templateUrl: "./recipes-details.component.html",
  styleUrls: ["./recipes-details.component.css"]
})
export class RecipesDetailsComponent implements OnInit {
  recipe;
  recipeId;
  observable: string;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {
    this.route.params.subscribe(params => (this.recipeId = params));
  }

  ngOnInit() {
    const RECIPE = [];
    this.recipeService.fetchRecipe(this.recipeId).subscribe(data => {

      let id = this.recipeId;
      let title = data[0].label;
      let image = data[0].image;
      let url = data[0].url;
      RECIPE.push(new Recipes(id, title, image, url));
      return RECIPE;
    });
    this.recipe = RECIPE;
  }
}
