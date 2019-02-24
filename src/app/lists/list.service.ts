import { Injectable } from "@angular/core";
import { Lists } from "./list.model";
import { Recipes } from "../recipes/recipe.model";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: "root"
})
export class ListService {
  list: Lists[];
  listTitle: string = "My List";
  recipes: Recipes[] = [];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Bearer {${localStorage.getItem('token')}}`,
    })};
  
  constructor(private http: HttpClient) {}

  getLists() {
    const uid = parseInt(localStorage.getItem('uid'));
    return this.http.get<any>(`http://recipe-api.danielsalin.chas.academy/api/user/${uid}/lists`, this.httpOptions);
  }
  

  createList(listTitle) {
    listTitle = (listTitle === undefined) ? listTitle = "My Recipe List" : listTitle;
    const LIST = [];
    const uid = parseInt(localStorage.getItem('uid'));
    LIST.push(new Lists(listTitle, uid, null));
    return this.http.post<any>("http://recipe-api.danielsalin.chas.academy/api/list", LIST[0], this.httpOptions);
  }

  deleteList(listId) {
    return this.http.delete<any>(`http://recipe-api.danielsalin.chas.academy/api/list/${listId}`, this.httpOptions);
  }

  deleteRecipe(list, recipeId) {
    const updatedList = list.recipes.filter(recipe => recipe.id != recipeId);
    list.recipes = [];
    updatedList.forEach(recipe =>
      {
        list.recipes.push(recipe);
      });
      return this.http.put<any>(`http://recipe-api.danielsalin.chas.academy/api/list/${list.id}`, list, this.httpOptions);  
  };

  addRecipe(recipe, list) {
    (list.recipes === null) ? list.recipes = [] : list.recipes;
    const RECIPES = [];
    RECIPES.push({ title: recipe[0].title, id: recipe[0].id.id });
    RECIPES.forEach(recipe =>
      {
        list.recipes.push(recipe);
      });
    return this.http.put<any>(`http://recipe-api.danielsalin.chas.academy/api/list/${list.id}`, list, this.httpOptions)
    };
  
}
