import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TransferService } from './service/transfer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  url: any;
  postData: any;

  constructor(private service:TransferService,private http:HttpClient){}

 loginForm:FormGroup | any;
 login_details: Array<any> = []
 edit_state : Boolean = false

  ngOnInit(){
     this.loginForm = new FormGroup({
      username : new FormControl(''),
      password : new FormControl('')
     })
  }
  customer_login_data :any;
  customer_login_datas: object | any;
  onSubmit(){
   this.customer_login_data = this.loginForm.value
   this.service.postDetails(this.customer_login_data).subscribe((_res)=>{
   console.log(this.customer_login_data);
    this.loginForm.reset()
    this.view()
   })
  }

  

   

  storage_list :any=[]
  view(){
    this.service.getDetails().subscribe((ee)=>{
      this.storage_list = ee
    })
  }

  delete(id:any){
    this.service.deleteDetails(id).subscribe((_res)=>{
    this.view()
    })
  }

  user_name : any =""
  user_pass : any = ""
  index_value = 0

  edit(i:any){
    this.user_name = this.storage_list[i].username;
    this.user_pass = this.storage_list[i].password;
    this.edit_state = true;
    this.heading = "Edit";
    this.index_value = i

  }

 
  
  heading = "Login Form";



  
  update(){
    
    this.edit_state = false;
    this.heading = "Login Form";
    this.storage_list[this.index_value].username = this.user_name
    this.storage_list[this.index_value].password = this.user_pass
    this.loginForm.reset();
    this.customer_login_datas = this.storage_list[this.index_value];
    // let post:Object;
    // console.log(this.customer_login_datas)
     let id = this.storage_list[this.index_value].id;
     this.service.updateDetails(id,this.customer_login_datas).subscribe((_res)=>{

     })

    
}
}
