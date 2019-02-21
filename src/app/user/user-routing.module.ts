import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login.component";
import { SignupComponent } from "./signup.component";
import { UserComponent } from './user.component';

const userRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: SignupComponent },
  { path: "user", component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
