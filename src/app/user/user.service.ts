import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(login) {
    return this.http.post("http://recipe-api.danielsalin.chas.academy/api/login", login);
  }
  
  register(signup) {
    return this.http.post("http://recipe-api.danielsalin.chas.academy/api/register", signup);
  }

}
