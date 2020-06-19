import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { Bike } from 'src/app/shared/models/bike';
import { BikeService } from 'src/app/shared/services/bike.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  

  constructor() { }

  currentUser: User;
  currentBikes: Bike[];

  ngOnInit(): void {
   
    this.currentUser =JSON.parse(localStorage.getItem('user'));
    this.currentBikes =JSON.parse(localStorage.getItem('bikes'));
    
    console.log(this.currentUser);
    console.log(this.currentBikes);
  }
 

}
