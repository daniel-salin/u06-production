import { Component, OnInit } from "@angular/core";
import { UserService } from './user.service'
import { TokenService } from './token.service'
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

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

  constructor(
    private userService: UserService, 
    private tokenService: TokenService, 
    private route: Router,
    private authService: AuthService
    ) {}

  ngOnInit() {}

  onSubmit() {
    this.userService.login(this.login).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) { 
    this.tokenService.handleToken(data.access_token);
    this.authService.changeStatus(true);
    this.route.navigateByUrl('/user');
  }

  handleError(error) {
    this.error = error.error.error;
  }

}
