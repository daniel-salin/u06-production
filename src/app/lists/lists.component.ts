import { Component, OnInit } from "@angular/core";
import { ListService } from "./list.service";
import { Lists } from "./list.model";

@Component({
  selector: "app-lists",
  templateUrl: "./lists.component.html",
  styleUrls: ["./lists.component.css"]
})
export class ListsComponent implements OnInit {
  list: Lists[];

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.list = this.listService.getListContent();
    console.log(this.list);
  }
}
