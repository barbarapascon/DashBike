import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material';
import { BikeService } from 'src/app/shared/services/bike.service';
import { Bike } from 'src/app/shared/models/bike';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  currentUser: User;
  
  currentBikes: Bike[];
  
  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor() { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('user'))
    
    this.currentBikes =JSON.parse(localStorage.getItem('bikes'));

    console.log(this.currentBikes);
  }

}
