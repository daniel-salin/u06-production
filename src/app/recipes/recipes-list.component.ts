import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { observable } from 'rxjs';
import { Recipes } from './recipe.model';



@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipes[];
  query: string;
  observable: string;


  constructor(private recipeService: RecipeService) { }
   
  ngOnInit() {
    
  }

  searchRecipes() {
    this.observable = this.recipeService.getRecipes(this.query)
    .subscribe(data => this.recipes = data.hits);  
  }

}
