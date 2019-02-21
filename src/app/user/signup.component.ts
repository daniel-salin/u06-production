import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  error: string;
  signup: Object = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onSubmit() {
    if(this.signup['password' ]=== this.signup['password_confirmation']) {
      this.http.post('http://recipeapi.test/api/register', this.signup).subscribe(
        data => console.log(data),
        error => this.handleError(error)
      );
    } else {
      this.error = "Your passwords do not match";
    }
  }

  handleError(error) {
    this.error = error.error.error;
  }

}
