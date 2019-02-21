import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { RecipesModule } from './recipes/recipes.module';
import { ListsModule } from './lists/lists.module';
import { UserModule } from './user/user.module';


const routes: Routes = [

  {path: "", redirectTo: "/recipe", pathMatch: 'full' },
  // Recipe Routes
  {path: "recipe", redirectTo: "/recipe", pathMatch: 'full' },
  {path: "lists", redirectTo: "/lists", pathMatch: 'full' },
  
  // Login Routes
  {path: "login", redirectTo: "/login", pathMatch: 'full' },
  {path: "signup", redirectTo: "/signup", pathMatch: 'full' },
  
  {path: "**", component:NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RecipesModule,
    ListsModule,
    UserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
