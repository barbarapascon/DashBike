import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { Bike } from 'src/app/shared/models/bike';
import { BikeService } from 'src/app/shared/services/bike.service';
import { Corridas } from 'src/app/shared/models/corridas';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarOpen = true;
  currentUser: User;
  bikes: Bike[];
  corridas: Corridas[];
  constructor(private bikeService: BikeService, private authService: AuthService) { }

  ngOnInit() { 
    this.currentUser = JSON.parse(localStorage.getItem('user'))
    console.log("token do login: " + this.currentUser);
    this.bikeService.getBikes(this.currentUser.token).subscribe((bikes: Bike[]) => {

      console.log("bikes do defaut: " + bikes);
      console.log(bikes);

    });
    this.bikeService.getCorridas(this.currentUser.token).subscribe((corridas: Corridas[]) => {

      console.log("corridas do defaut: " + corridas);
      console.log(corridas);

    });
    this.authService.getUsers(this.currentUser.token).subscribe((users: User[]) => {

      console.log("users do defaut: " + users);
      console.log(users);

    });
  }


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
