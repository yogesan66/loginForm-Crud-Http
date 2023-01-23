import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  url:string;
  constructor(private http : HttpClient) { this.url='http://localhost:3000/loginDetails/' }

  

  postDetails(customer_login_data:any){
    return this.http.post('http://localhost:3000/loginDetails',customer_login_data)
  }

  updateDetails(id:any,post:object){
    return this.http.put('http://localhost:3000/loginDetails/'+id,post)
  }

  getDetails(){
    return this.http.get('http://localhost:3000/loginDetails')
  }
  deleteDetails(id:any){
    return this.http.delete('http://localhost:3000/loginDetails/'+ id)
  }
}
