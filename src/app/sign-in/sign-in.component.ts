import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidationService } from '../services/custom-validation.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private customValidator: CustomValidationService) { }

  userForm = this.fb.group(
    {
      username: [ "",[Validators.required]],
      password: ["", Validators.required],
    })

    get username() {
      return this.userForm.get("username");
    }
  
    get password() {
      return this.userForm.get("password");
    }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userForm.value);
  }

}
