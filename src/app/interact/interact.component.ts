import { Component, OnInit } from '@angular/core';
import { TalkService } from '../talk.service';

@Component({
  selector: 'app-interact',
  templateUrl: './interact.component.html',
  styleUrls: ['./interact.component.css']
})



export class InteractComponent implements OnInit {
  products: any;
  id;
  name;
  brand;
  price;
  id1;
  name1;
  brand1;
  price1;
deleteitem;

  constructor(private talk : TalkService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){

    this.talk.getProducts().subscribe( (res) =>{
      this.products = res
      console.log(res);
      
    } )   
  }

  addProduct(){
    const newObj = {
      id: this.id,
    productName: this.name,
    productBrand: this.brand,
    price: this.price
    }
    this.talk.addTheProduct(newObj).subscribe((res)=>{
      console.log(res);
      
    })
  }


  updateProduct(){
    let upObj = {
      id: this.id1,
    productName: this.name1,
    productBrand: this.brand1,
    price: this.price1
    }
    this.talk.updateProduct(this.id1,upObj).subscribe((res1)=>{
      console.log(res1);
      
    })

  }
  delete(){
    this.talk.delete(this.deleteitem).subscribe((data)=>{
      console.log("user deleted success");     
    },(err)=>{
      // console.log("unable to delete");
      
    })
  }
  



}
