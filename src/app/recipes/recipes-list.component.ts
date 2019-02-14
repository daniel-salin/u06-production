import { Component, OnInit } from "@angular/core";
import { RecipeService } from "./recipe.service";
import { Recipes } from "./recipe.model";
import * as $ from 'jquery'

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"]
})
export class RecipesListComponent implements OnInit {
  query: string;
  recipes: Recipes[];
  diet: Object = {
    balanced: { check: false, param: "Balanced" },
    "high fiber": { check: false, param: "High-Fiber" },
    "high protein": { check: false, param: "High-Protein" },
    "low carb": { check: false, param: "Low-Carb" },
    "low fat": { check: false, param: "Low-Fat" },
    "high sodium": { check: false, param: "Low-Sodium" }
  };
  health: Object = {
    "alcohol free": { check: false, param: "Alcohol-Free" },
    "celery free": { check: false, param: "Celery-Free" },
    "crustacean free": { check: false, param: "Crustacean-Free" },
    "dairy free": { check: false, param: "Dairy-Free" },
    "egg free": { check: false, param: "Egg-Free" },
    "fish free": { check: false, param: "Fish-Free" },
    "gluten free": { check: false, param: "Gluten-Free" },
    "kidney friendly": { check: false, param: "Kidney-Free" },
    "kosher": { check: false, param: "Kosher" },
    "low potassium": { check: false, param: "Low-Potassium" },
    "lupine free": { check: false, param: "Lupine-Free" },
    "mustard free": { check: false, param: "Mustard-Free" },
    "no oil added": { check: false, param: "No-Oil-Added" },
    "low sugar": { check: false, param: "Low-Sugar" },
    "paleo": { check: false, param: "Paleo" },
    "peanut free": { check: false, param: "Peanut-Free" },
    "pescatarian": { check: false, param: "Pescatarian" },
    "pork free": { check: false, param: "Pork-Free" },
    "red meat free": { check: false, param: "Red-Meat-Free" },
    "sesame free": { check: false, param: "Sesame-Free" },
    "shellfish free": { check: false, param: "Shellfish-Free" },
    "soy free": { check: false, param: "Soy-Free" },
    "sugar conscious": { check: false, param: "Sugar-Conscious" },
    "tree nut free": { check: false, param: "Tree-Nut-Free" },
    "vegan": { check: false, param: "Vegan" },
    "vegetarian": { check: false, param: "Vegetarian" },
    "wheat free": { check: false, param: "Wheat-Free" }
  };

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    $('.progress').hide();
  }

  /**
   *  This filter methods triggers when the health option checkbox
   *  is pressed. If the recipes object is not empty it then
   *  iterates over each recipe and checks if it contains
   *  a match for the checkbox filter. If found it sets the display
   *   used in the card class in the template to hide.
   */
  filter(event: any,filterType: string) {
    let filterLabel = event.target.value;
    if (event.target.checked && this.recipes != undefined) {
      this.recipes.forEach(element => {
        let toBeFiltered =
          filterType === "health" ? element.healthLabels : element.dietLabels;
        if (!toBeFiltered.includes(filterLabel)) {
          element.display = "hide";
        }
      });
    } else if (!event.target.checked && this.recipes != undefined) {
      this.recipes.forEach(element => {
        let toBeFiltered =
          filterType === "health" ? element.healthLabels : element.dietLabels;
        if (!toBeFiltered.includes(filterLabel)) {
          element.display = "show";
        }
      });
    }
  }

  /**
   * If get-request goes through, the recipe id is built by stripping away
   * the everything that precedes the identifier in the
   * end of the uri
   */
  searchRecipes() {
    $('.progress').show()
    const RECIPES = [];
    this.recipeService.queryRecipes(this.query).subscribe(data => {
      data.hits.forEach(element => {
        let uri = element.recipe.uri;
        let uriSplit = uri.split("_");
        let id = uriSplit[1];
        let title = element.recipe.label;
        let image = element.recipe.image;
        let url = element.recipe.url;
        let healthLabels = element.recipe.healthLabels;
        let dietLabels = element.recipe.dietLabels;
        let ingredientLines = element.recipe.ingredientLines;
        let calories = element.recipe.calories;
        let display = "show";
        RECIPES.push(
          new Recipes(
            id,
            title,
            image,
            url,
            healthLabels,
            dietLabels,
            ingredientLines,
            calories,
            display
          )
        );
      });
      this.recipes = RECIPES;
      $('.progress').hide();
    });
  }
}
