import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  currentUser: User;
  returnUrl: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
  
    const loginObserver = {
      next: x => {
        console.log('User logged in');
        console.log("logado");
      },
      error: err => {
        console.log(err);console.log("nao logou");
      }
    }; 
    this.authService.login(f.value).subscribe(
      data => {
          this.router.navigate(['/'], 
          {queryParams: data});
          console.log(data);
          return data
      },
      error => {
          console.log(error);
      });
    console.log("objeto hehe");
    console.log(loginObserver);

  }

}