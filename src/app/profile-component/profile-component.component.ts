import { Component, OnInit } from '@angular/core';
import { user } from '../user';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})


export class ProfileComponentComponent implements OnInit {

  user: user = {
    name: "Jeff",
    age: 99,
    happy: false
  };
  select: boolean = false;
  changeSelect(){
    this.toggle = "Hide";
    this.select = !this.select;
  }
  toggle: string = "Show";
  // toggleButton(){
  //   if(this.)
  // }

  selectedUser: user;
  onSelect(user: user): void {
    this.selectedUser = user;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
