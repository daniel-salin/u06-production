import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Recipe Components 

// Recipe Routing
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesListComponent } from './recipes-list.component';


@NgModule({
  declarations: [RecipesListComponent],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    FormsModule,
  ]
})
export class RecipesModule { }


