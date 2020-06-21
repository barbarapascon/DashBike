import { Component, OnInit } from '@angular/core';
import { Bike } from '../../models/bike';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  texto : string = 'Wenceslau Braz - Cuidado com as cargas';
  lat: number = -23.5489;
  lng: number = -46.6388;
  zoom: number = 15;

  constructor() { }

  currentBikes: Bike[];
  ngOnInit(): void {

    this.currentBikes =JSON.parse(localStorage.getItem('bikes'));
    if(this.currentBikes){
      this.currentBikes.forEach(element => {
       console.log(element.coordinates.coordinates[0]);
        
      });
    }
  }

}
