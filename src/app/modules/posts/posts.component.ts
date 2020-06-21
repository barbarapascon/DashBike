import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material';
import { BikeService } from 'src/app/shared/services/bike.service';
import { Bike } from 'src/app/shared/models/bike';
import { User } from 'src/app/shared/models/user';
import { Historico } from 'src/app/shared/models/historico';
import { Corridas } from 'src/app/shared/models/corridas';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  currentUser: User;
  
  currentBikes: Bike[];
  currentCorridas: Corridas[];
  historico: Historico[];
  currentUsers:User[];
  
  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor(private bikeService: BikeService) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('user'))
    
    this.currentBikes =JSON.parse(localStorage.getItem('bikes'));
    this.historico =JSON.parse(localStorage.getItem('historico'));

    this.currentUsers =JSON.parse(localStorage.getItem('users'));
    this.currentCorridas =JSON.parse(localStorage.getItem('corridas'));

   
    //console.log(this.historico);
  }

  carregaHistorico(id){
    this.bikeService.getHistorico(id, 'all').subscribe((historico: Historico[]) => {
      console.log("hidtorico do defaut: " + historico);
      console.log(historico);

    });
  }

}
