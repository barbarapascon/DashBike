import { Component, OnInit } from '@angular/core';
import { Bike } from '../../models/bike';
import { Corridas } from '../../models/corridas';
import { Historico } from '../../models/historico';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  texto : string = 'Wenceslau Braz - Cuidado com as cargas';
  lat: number = -23.754423;
  lng: number = -46.55474; 
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
