import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login.component";
import { SignupComponent } from "./signup.component";
import { UserComponent } from './user.component';
import { BeforeLoginService } from './before-login.service';
import { AfterLoginService } from './after-login.service';

const userRoutes: Routes = [
  { path: "login", component: LoginComponent, canActivate: [BeforeLoginService] },
  { path: "register", component: SignupComponent, canActivate: [AfterLoginService] },
  { path: "user", component: UserComponent, canActivate: [AfterLoginService] }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
