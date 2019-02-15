import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListsComponent } from './lists.component';


const listsRoutes: Routes = [
  
  {path: "lists", component:ListsComponent},
];

    @NgModule({
      imports: [RouterModule.forChild(listsRoutes)],
      exports: [RouterModule]
    })

export class ListsRoutingModule { }