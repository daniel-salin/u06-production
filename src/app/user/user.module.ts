import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
