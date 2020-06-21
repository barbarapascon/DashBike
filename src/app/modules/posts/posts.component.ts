import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material';
import { BikeService } from 'src/app/shared/services/bike.service';
import { Bike } from 'src/app/shared/models/bike';
import { User } from 'src/app/shared/models/user';
import { Historico } from 'src/app/shared/models/historico';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  currentUser: User;
  
  currentBikes: Bike[];

  historico: Historico[];
  
  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor(private bikeService: BikeService) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('user'))
    
    this.currentBikes =JSON.parse(localStorage.getItem('bikes'));
    this.historico =JSON.parse(localStorage.getItem('historico'));

   
    //console.log(this.historico);
  }

  carregaHistorico(id){
    this.bikeService.getHistorico(id).subscribe((historico: Historico[]) => {
      console.log("hidtorico do defaut: " + historico);
      console.log(historico);

    });
  }

}
