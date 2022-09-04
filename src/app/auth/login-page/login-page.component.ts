import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  isVisible: boolean = true;
  isAlertShow: boolean = false
  isEmailValid: boolean = true
  iconPasswordColor: string = "icon"

  constructor() {}

  ngOnInit(): void {}

  handleSubmit = () => {
    if (this.form.invalid) {
      this.isAlertShow = true
      this.isEmailValid = false
      this.iconPasswordColor = "icon-red"
      Object.keys(this.form.controls).forEach((field) => {
        const control: any = this.form.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    } else {
      console.log(this.form.value);
    }
  };

  handleShowPassword = () => {
    this.isVisible = !this.isVisible;
  };

  handleHideAlert = () => {
    this.isAlertShow = false
  }
}
