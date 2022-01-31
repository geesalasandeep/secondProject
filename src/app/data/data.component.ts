import { Component, OnDestroy, OnInit } from '@angular/core';
import { ObserveService } from '../observe.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit,OnDestroy {
  obb: any;

  constructor(private observe : ObserveService) { }

  ngOnInit(): void {
  }

  callFunctionCreate(){
    this.obb = this.observe.createObservable().subscribe((data)=>{
      console.log(data);
       })
  }

  ngOnDestroy(): void {
      this.obb.unsubscribe()
  }



}
 