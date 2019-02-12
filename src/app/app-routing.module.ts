import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { RecipesModule } from './recipes/recipes.module';

const routes: Routes = [
  {path: "", redirectTo: "/recipe", pathMatch: 'full' },
  
  {path: "**", component:NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RecipesModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
