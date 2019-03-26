import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-component',
  templateUrl: './select-component.component.html',
  styleUrls: ['./select-component.component.css']
})
export class SelectComponentComponent implements OnInit {

  animals : string[] =[
    'Fox',
    'Goose','chicken','ox', 'lamb'
  ];

  colors : string[] = [
    'dark black', 'grey', 'black', 'dark white', 'light black'
  ]

  days : string[] = [
    'monday', 'tueday',' wedsday', 'friday' 
]

  list: string[];

radioSelect(event){
  let selected = event.target.value;
  if(selected === "animals"){
    this.list = this.animals;
  }else if(selected === "colors"){
    this.list = this.colors;
  }else if(selected = "days"){
    this.list = this.days;
  }
  console.log(this.list);
}

  constructor() { }

  ngOnInit() {
  }

}
