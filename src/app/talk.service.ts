import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TalkService {

  constructor(private http:HttpClient) { }

  getProducts(){
   return this.http.get<any>(' http://localhost:3000/products ');
  }


  addTheProduct(product){
    return this.http.post<any> ('http://localhost:3000/products',product);
  }


updateProduct(id1,product){
  return this.http.put<any> ( 'http://localhost:3000/products/'+id1,product );
}

delete(id:any){
 return this.http.delete('http://localhost:3000/products/'+id);
}

}