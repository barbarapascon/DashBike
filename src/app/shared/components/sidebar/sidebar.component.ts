import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  currentUser: User;


  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('user'))
  }

}
