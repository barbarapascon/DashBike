import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { Bike } from 'src/app/shared/models/bike';
import { BikeService } from 'src/app/shared/services/bike.service';
import { Corridas } from 'src/app/shared/models/corridas';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  

  constructor() { }

  currentUser: User;
  currentBikes: Bike[];
  currentCorridas: Corridas[];
  quantidadeBikesBloqueadas : any;
  bikes: Bike;

  ngOnInit(): void {
   
    this.currentUser =JSON.parse(localStorage.getItem('user'));
    this.currentBikes =JSON.parse(localStorage.getItem('bikes'));
    this.quantidadeBikesBloqueadas=0;
    this.currentCorridas =JSON.parse(localStorage.getItem('corridas'));
    if(this.currentBikes){
      this.currentBikes.forEach(element => {
        if(element.locked == true)
        this.quantidadeBikesBloqueadas++;
      });
    }
    console.log(this.currentUser);
    console.log(this.currentBikes);
    console.log(this.currentCorridas);
  }
 

}
