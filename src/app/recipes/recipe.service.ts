import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: "root"
})
export class RecipeService {
  // apiRoot: string = "http://localhost:3000/hits";
  apiRoot: `https://api.edamam.com/`;
  recipe: Observable<any[]>
  APP_ID: string = "4cf42b21";
  APP_KEY: string = "5d41f92a4ec177edaae03bcf123ac46b";

  constructor(private http: HttpClient) {}

  getRecipes(query:string): any {
    let url = `https://api.edamam.com/search?q=${query}&app_id=${this.APP_ID}&app_key=${this.APP_KEY}&from=0&to=10`
    return this.http.get(url);
  }
}
