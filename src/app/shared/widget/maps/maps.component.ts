import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Bike } from '../../models/bike';
import { Corridas } from '../../models/corridas';
import { Historico } from '../../models/historico';
import { AgmMap } from '@agm/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MapsComponent implements OnInit {

  texto : string = 'Wenceslau Braz - Cuidado com as cargas';
  lat: number = -23.754423;
  lng: number = -46.55474; 
  zoom: number = 15;
  sites= [
    { lat: 35.929673, lng: -78.948237 },
    { lat: 38.889513, lng: -78.477510 },
    { lat: 47.92394, lng: -97.472300 },
   ];
  constructor() { }

  currentBikes: Bike[];
  onMarkerClicked(event){
    console.log("The selected marker coordinates are:"+ event.coordinates[0] +"and" + event.coordinates[0]);
   }

  @ViewChild("agmMap") agmMap: AgmMap;
  ngOnInit(): void {
  
    this.currentBikes =JSON.parse(localStorage.getItem('bikes'));
    if(this.currentBikes){
      this.currentBikes.forEach(element => {
       console.log(element.coordinates.coordinates[0]);
        
      });
    }
  }

}
