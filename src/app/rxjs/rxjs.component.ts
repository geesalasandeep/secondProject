import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  //off operator
  studentList = ['sandeep','ram','sita','lisa'];
  students: Observable <string[]> = of(this.studentList);
  studentNames : Observable <string> = of('sandeep');

  studentobj = {
    id: 1,
    name : 'ram'
  }
  // student$ : Observable<string[]> = (this.studentobj)

//from operator
  ordersArr = ['Fashion','electonics','mobile','household'];
  orders$ : Observable <string> = from(this.ordersArr);
  orderName: any;

  @ViewChild('validate')
  validate : ElementRef;

  @ViewChild('getLink')
  getLinkData : ElementRef;







  constructor() { }

  ngOnInit(): void {

  //  of operator
    // this.students.subscribe(data=>{
    //   console.log(data);      
    // })

    // this.studentNames.subscribe(data=>{
    //   console.log(data);
    // })

    // this.student$.subscribe((data)=>{
    //   console.log(data);
           // })
  

//from
           this.orders$.subscribe(data=>{
            console.log(data);
            
          })
          
  
          }
          rxjsEventObseravable(){
            const btnObservables$ = fromEvent(this.validate?.nativeElement,'click')
            btnObservables$.subscribe(data=>{
              console.log(data);
              
            })
            

          }

  

}
