import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  signInForm : FormGroup;
   

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    // this.signInForm = new FormGroup({
    //   email : new FormControl(),
    //   password : new FormControl(),
    //   check : new FormControl(), 
    //   skills : new FormGroup({
    //     skill : new FormControl(),
    //     yoe : new FormControl(),
    //     levelCheck :new FormControl()
    //   })
    // })

     this.signInForm = this.fb.group ({
      email : ['',Validators.required,Validators.email],
      userName : ['',[Validators.minLength(5),
    Validators.maxLength(10)]],
      password : [''],
      check : [''],
      skills : this.fb.group({
        skill: [''],
        yoe : [''],
        levelCheck : ['']
      }),
      hobbies : this.fb.array([]) 
  })
  }
  get hobbyControls(){
    return (<FormArray>this.signInForm.get("hobbies")).controls
  }
      
  
  get f(){
   return this.signInForm.controls
  }

 
  onFormSubmit(){ 
    console.log(this.signInForm.value);
    console.log(this.signInForm);    
  }

  addHobby(){
    const control = this.fb.control('',[Validators.required]);
    (<FormArray>this.signInForm.get('hobbies')).push(control);
  }

}
 