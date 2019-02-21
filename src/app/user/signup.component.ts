import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service'
import { Router } from '@angular/router';
import { TokenService } from './token.service';

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

  constructor(private userService: UserService, private tokenService: TokenService, private route: Router) {}

  ngOnInit() {}

  onSubmit() {
    if(this.signup['password' ]=== this.signup['password_confirmation']) {
      this.userService.register(this.signup).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
    } else {
      this.error = "Your passwords do not match";
    }
  }

  handleResponse(data) { 
    this.tokenService.handleToken(data.access_token);
    this.route.navigateByUrl('/user');
  }

  handleError(error) {
    this.error = error.error.error;
  }

}
