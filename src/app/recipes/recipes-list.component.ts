import { Component, OnInit } from "@angular/core";
import { RecipeService } from "./recipe.service";
import { Recipes } from "./recipe.model";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"]
})
export class RecipesListComponent implements OnInit {
  query: string;
  recipes: Recipes[];
  health: Object = {
    "alcohol free": { check: false, param: "alcohol-free" },
    "celery free": { check: false, param: "celery-free" },
    "crustacean free": { check: false, param: "crustacean-free" },
    "dairy free": { check: false, param: "dairy-free" },
    "egg free": { check: false, param: "egg-free" },
    "fish free": { check: false, param: "fish-free" },
    "gluten free": { check: false, param: "gluten-free" },
    "kidney friendly": { check: false, param: "kidney-free" },
    kosher: { check: false, param: "kosher" },
    "low potassium": { check: false, param: "low-potassium" },
    "lupine free": { check: false, param: "lupine-free" },
    "mustard free": { check: false, param: "mustard-free" },
    "no oil added": { check: false, param: "No-oil-added" },
    "low sugar": { check: false, param: "low-sugar" },
    paleo: { check: false, param: "paleo" },
    "peanut free": { check: false, param: "peanut-free" },
    pescatarian: { check: false, param: "pescatarian" },
    "pork free": { check: false, param: "pork-free" },
    "red meat free": { check: false, param: "red-meat-free" },
    "sesame free": { check: false, param: "sesame-free" },
    "shellfish free": { check: false, param: "shellfish-free" },
    "soy free": { check: false, param: "soy-free" },
    "sugar conscious": { check: false, param: "sugar-conscious" },
    "tree nut free": { check: false, param: "tree-nut-free" },
    vegan: { check: false, param: "vegan" },
    vegetarian: { check: false, param: "vegetarian" },
    "wheat free": { check: false, param: "wheat-free" }
  };

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}

  searchRecipes() {
    const RECIPES = [];
    this.recipeService.queryRecipes(this.query)
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
