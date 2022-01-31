import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 users = [
   {
     "name" : "Rahul",
     "id" : 1234,
 },
 {
  "name" : "Rohit",
  "id" : 4567,
},
{
  "name" : "Ritvik",
  "id" : 7895,
},
{
  "name" : "Sachit",
  "id" :3456,
},
]
}
