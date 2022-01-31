import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { filter,map,tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ObserveService {

  constructor() { }
  
  createObservable (){
    return new Observable((observer)=>{
      let count = 0;
      setInterval (()=>{
        count++
        observer.next(count)           
        if(count>5){
          observer.complete()
        }
      },1000)
    }).pipe(filter((value:any)=>{
      if(value % 2 === 0){
        return value
      }
    }),map((value)=>{
      return 'the value is ' + value;  
    }),tap ((value) =>{
      console.log(value);
      
    })
    ) 
  }
}
