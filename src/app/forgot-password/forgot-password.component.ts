import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {


  constructor( private fb: FormBuilder){}

  forgotPasswordGroup = this.fb.group({
    email:["",[Validators.required, Validators.email, Validators.minLength(5)]],
 });

 get email() {
  return this.forgotPasswordGroup.get("email");
}

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.forgotPasswordGroup.value)
  }


}
