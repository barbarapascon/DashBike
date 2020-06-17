import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authUrl = "https://apitccsmartbike20200527201546.azurewebsites.net/api/account/authenticate";

  helper = new JwtHelperService();
  decodedToken: any;
  currentUser: User;

  constructor(private http: HttpClient) {}

  login(model: any) {
    model.type = "admin";
    return this.http.post(this.authUrl , model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          console.log(user);
          localStorage.setItem("token", user.token);
          localStorage.setItem("user", JSON.stringify(user.userToReturn));
          this.decodedToken = this.helper.decodeToken(user.token);
          this.currentUser = user.userToReturn;
          return user;
        }
      })
    );
  }

  register(model: any) {
    let headers = new HttpHeaders({
    });
    let options = { headers: headers };
   //return this.http.post(this.employersUrl + "create", model, options);
  }

  resetPassword(model: any) {
    let headers = new HttpHeaders({
      //changePasswordUrl: this.changePasswordUrl
    });
    let options = { headers: headers };
    return this.http.post(this.authUrl + "resetpassword", model, options);
  }

  confirmEmail(model: any) {
    return this.http.post(this.authUrl + "confirmemail", model);
  }

  changePassword(model: any) {
    return this.http.post(this.authUrl + "changepassword", model);
  }

  loggedIn() {
    const token = localStorage.getItem("token");
    return !this.helper.isTokenExpired(token);
  }
}