import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import { User } from "../models/user";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authUrl = "https://apitccsmartbike20200527201546.azurewebsites.net/api/account/authenticate";
 usuarioUrl="https://apitccsmartbike20200527201546.azurewebsites.net/api/user/getall";
 usuarioCreateUrl="https://apitccsmartbike20200527201546.azurewebsites.net/api/user/create";
  helper = new JwtHelperService();
  decodedToken: any;
  currentUser: User;


  constructor(private http: HttpClient) {}
  getUsers(token): Observable<User[]> {

   
    var reqHeader = new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
     });

  

  return this.http.get<User[]>(this.usuarioUrl,{ headers: reqHeader })
    .pipe(
      map((response: any) => {
        const users = response;
        if (users) {
          localStorage.setItem("users", JSON.stringify(users));
          console.log(users);
          return users;
        }
      })
    )
}
  login(model: any) {
    model.type = "admin";
    return this.http.post(this.authUrl , model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem("token", user.token);
          localStorage.setItem("user", JSON.stringify(user.user));
          this.decodedToken = this.helper.decodeToken(user.token);
          this.currentUser = user.user;
          return user;
        }
      })
    );
  }

  register(model: any) {
    let headers = new HttpHeaders({
    });
    let options = { headers: headers };
   return this.http.post(this.usuarioCreateUrl + "create", model, options);
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