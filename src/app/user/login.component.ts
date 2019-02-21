import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  login: Object = {
    email: null,
    password: null
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.login);
  }
}
