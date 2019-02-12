import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Recipe Components 

// Recipe Routing
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesListComponent } from './recipes-list.component';
import { RecipesDetailsComponent } from './recipes-details.component';


@NgModule({
  declarations: [RecipesListComponent, RecipesDetailsComponent],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    FormsModule,
  ]
})
export class RecipesModule { }


