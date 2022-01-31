import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newreactive',
  templateUrl: './newreactive.component.html',
  styleUrls: ['./newreactive.component.css']
})
export class NewreactiveComponent implements OnInit {
passs;

  signInForm : FormGroup

  constructor( private fb : FormBuilder ) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email : ['',[Validators.required]],
      password : ['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      confirmpassword : ['',[Validators.required]]
    })

    
  } 
  get f(){
    return this.signInForm.controls
   }

  onFormSubmit(){
    console.log(this.signInForm.value);
    
  }

   pass(){
    if(this.signInForm.controls.password.value === this.signInForm.controls.confirmpassword.value){
    //  console.log("same")

    }else{
    // console.log("not same");

    }
    
     
   }
  


}

