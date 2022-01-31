import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
searchItem;
  constructor() { }

  ngOnInit(): void {
  }

  empData = [
    {
      empName : 'Sandeep',
      Salary : 40300,
      DOB : '15/10/1996',
      designation : 'Devloper'
    },
    {
      empName : 'Sravan',
      Salary : 42000,
      DOB : '11/10/1997',
      designation : 'Devloper'
    },
    {
      empName : 'Suma',
      Salary : 40500,
      DOB : '15/04/1995',
      designation : 'Devloper'
    },
    {
      empName : 'sudha',
      Salary : 42000,
      DOB : '12/11/1997',
      designation : 'Devloper'
    },
    {
      empName : 'SaiRam',
      Salary : 44000,
      DOB : '15/12/1995',
      designation : 'Devloper'
    },
    {
      empName : 'alekhyA',
      Salary : 40600,
      DOB : '15/05/1994',
      designation : 'Devloper'
    },
    {
      empName : 'Rohit',
      Salary : 400010,
      DOB : '12/06/1996',
      designation : 'Devloper'
    }
  ]

}
