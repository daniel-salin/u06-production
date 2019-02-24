import { Component, OnInit } from "@angular/core";
import { ListService } from "./list.service";
import { Lists } from "./list.model";
import * as $ from "jquery";

@Component({
  selector: "app-lists",
  templateUrl: "./lists.component.html",
  styleUrls: ["./lists.component.css"]
})
export class ListsComponent implements OnInit {
  lists: Lists[];
  listTitle: string;

  constructor(private listService: ListService) {}

  ngOnInit() {
    $(".progress").hide();
    this.getLists();
  }

  getLists() {
    const LIST = [];
    this.listService.getLists().subscribe(data => {
      data.data.forEach(data => {
        LIST.push(
          new Lists(
            data.attributes.title,
            parseInt(localStorage.getItem("uid")),
            data.attributes.recipes,
            data.id
          )
        );
        return LIST;
      });
    });
    return (this.lists = LIST);
  }

  deleteList(listId) {
    $(".progress").show();
    this.listService.deleteList(listId).subscribe(response => {
      $(".progress").hide();
      this.getLists();
    });
  }

  removeRecipe(list, recipeId) {
    this.listService.deleteRecipe(list, recipeId).subscribe(response => {
      this.getLists();
    });
  }

  onSubmit() {
    $(".progress").show();
    this.listService.createList(this.listTitle).subscribe(data => {
      $(".progress").hide();
      this.getLists();
    });
  }
}
