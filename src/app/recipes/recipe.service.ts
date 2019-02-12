import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { jsonpCallbackContext } from "@angular/common/http/src/module";
import { Observable } from "rxjs";
import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";
import { Recipes } from './recipe.model';
import { secretAPI } from './api';


@Injectable({
  providedIn: "root"
})
export class RecipeService {
  recipe;
  
  constructor(private http: HttpClient, private sApi: secretAPI) {}

  queryRecipes(query: string): any {
    let url = `https://api.edamam.com/search?q=${query}&app_id=${
      this.sApi._id
    }&app_key=${this.sApi._key}&from=0&to=10`;
    this.recipe = this.http.get<Recipes[]>(url);
    return this.recipe;
  }

  fetchRecipe(recipeId) {
    let url = `https://api.edamam.com/search?app_id=${this.sApi._id}&app_key=${this.sApi._key}&r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${recipeId.id}`;
    return this.http.get(url);
    };
  }