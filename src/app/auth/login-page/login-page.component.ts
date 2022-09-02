import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  isVisible: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  handleSubmit = () => {
    if (this.form.invalid) {
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
}
