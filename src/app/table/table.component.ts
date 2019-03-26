import { Component, OnInit } from '@angular/core';
import { people } from  '../people';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})



export class TableComponent implements OnInit {

  xy: string = '';



  people: people [] = [{
    name: "Kelby g",
    email: "FuzzyNav@aol.com",
    birthday: new Date ("08/10/54"),
    },
    {
      name: "Kelby e",
      email: "FuzzyNav@aol.com",
      birthday: new Date ("08/10/54"),
      },
      {
        name: "Kelby f",
        email: "FuzzyNav@aol.com",
        birthday: new Date ("08/10/54"),
        }  
    ]

   


  constructor() { }

  ngOnInit() {
  }


   toggle  () {
    if (this.xy === ''){
     this.xy = 'table';
    }else{
      this.xy = '';
    }
  }
}
