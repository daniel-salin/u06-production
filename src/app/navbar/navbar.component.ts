import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { TokenService } from '../user/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
public loggedIn: boolean;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.authService.authStatus.subscribe(value => this.loggedIn = value);
  }

  logout() {
    this.authService.changeStatus(false);
    this.tokenService.unset();
  }

}
