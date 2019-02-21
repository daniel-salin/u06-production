import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  error: string;
  login: Object = {
    email: null,
    password: null
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onSubmit() {
    this.http.post('http://recipeapi.test/api/login', this.login).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    );
  }

  handleError(error) {
    this.error = error.error.error;
  }

}
