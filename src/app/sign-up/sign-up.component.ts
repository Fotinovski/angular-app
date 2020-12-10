import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { CustomValidationService } from "../services/custom-validation.service";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private customValidator: CustomValidationService
  ) {}

  userForm = this.fb.group(
    {
      username: [
        "",
        [Validators.required, Validators.minLength(3)],
        this.customValidator.validateUsernameNotTaken.bind(this.customValidator)
      ],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
      address: this.fb.group({
        street: [""],
        city: [""],
        country: [""],
        zip: [""]
      })
    },
    {
      validator: this.customValidator.passwordMatchValidator(
        "password",
        "confirmPassword"
      )
    }
  );



  get username() {
    return this.userForm.get("username");
  }

  get confirmPassword() {
    return this.userForm.get("confirmPassword");
  }

  get password() {
    return this.userForm.get("password");
  }

  ngOnInit() {}

  clear() {
    this.userForm.reset();
    this.username.setValue("");
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}
