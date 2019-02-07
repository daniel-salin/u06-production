import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RecipesListComponent } from './recipes-list.component';


const recipesRoutes: Routes = [
  
  {path: "recipes", component:RecipesListComponent}

];

    @NgModule({
      imports: [RouterModule.forChild(recipesRoutes)],
      exports: [RouterModule]
    })

export class RecipesRoutingModule { }
