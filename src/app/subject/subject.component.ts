import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


   

    // -------------- observable --------------------

    // const observable = new Observable(obj =>obj.next(Math.random()));
    // observable.subscribe(d=> console.log(d));
    // observable.subscribe(d=> console.log(d));

    // ----------------- subject --------------------

    const subject = new Subject();

    subject.subscribe(d => console.log(d));
    // subject.subscribe(d => console.log(d));

    subject.next(Math.random());

    
  }
  

}







