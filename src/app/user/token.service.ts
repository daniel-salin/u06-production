import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TokenService {
  private iss = {
    login: "http://recipe-api.danielsalin.chas.academy/login",
    register: "http://recipe-api.danielsalin.chas.academy/api/register"
  }

  constructor() {}

  handleToken(token, uid) {
    this.set(token, uid);
  }

  get() {
    return localStorage.getItem("token");
  }

  set(token, uid) {
    localStorage.setItem("token", token);
    localStorage.setItem("uid", uid);
  }

  unset() {
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
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
