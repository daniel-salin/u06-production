import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists.component';

import { ListsRoutingModule } from './lists-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListsComponent],
  imports: [
    CommonModule,
    ListsRoutingModule,
    FormsModule
  ]
})
export class ListsModule { }
