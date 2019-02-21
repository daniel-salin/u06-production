import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TokenService {
  private iss = {
    login: "http://recipeapi.test/api/login",
    register: "http://recipeapi.test/api/register"
  }

  constructor() {}

  handleToken(token) {
    this.set(token);
    console.log(this.isValid());
  }

  get() {
    return localStorage.getItem("token");
  }

  set(token) {
    localStorage.setItem("token", token);
  }

  unset() {
    localStorage.removeItem("token");
  }

  isValid() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  payload(token) {
    const payload = token.split(".")[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }
}
