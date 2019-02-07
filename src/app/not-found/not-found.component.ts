import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent implements OnInit {
  title:string = "This is not the route you are looking for...";
  constructor() { }

  ngOnInit() {
  }

}
