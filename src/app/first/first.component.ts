import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log(form);
    console.log(form.value);
    
    
  }


}
