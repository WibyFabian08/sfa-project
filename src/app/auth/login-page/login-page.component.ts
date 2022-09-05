import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';

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
  alertMessage: string = ""
  isEmailValid: boolean = true
  iconPasswordColor: string = "icon"
  isLoading: boolean = false

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(

  ): void { 
    let data: any = localStorage.getItem("token")
    let token: any = JSON.parse(data)

    console.log(data)
  }

  handleSubmit = () => {
    if (this.form.invalid) {
      this.isAlertShow = true
      this.alertMessage = "Email dan Kata Sandi Harus Diisi"
      this.isEmailValid = false
      this.iconPasswordColor = "icon-red"
      Object.keys(this.form.controls).forEach((field) => {
        const control: any = this.form.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    } else {
      this.isLoading = true
      this.authService.login(this.form.value)
        .subscribe({
          next: (data: any) => {
            this.isAlertShow = false
            this.alertMessage = ""
            this.isEmailValid = true
            this.iconPasswordColor = "icon"
            this.isLoading = false
            let token = data.data.access_token
            // let decoded = jwt_decode(token);
            localStorage.setItem("token", JSON.stringify(token))
            this.router.navigate(["/admin/dashboard"])
          },
          error: (err) => {
            this.isLoading = false
            this.isAlertShow = true
            this.alertMessage = "Email dan Kata Sandi yang dimasukan salah"
          }
        })
    }
  };



  handleShowPassword = () => {
    this.isVisible = !this.isVisible;
  };

  handleHideAlert = () => {
    this.isAlertShow = false
  }
}
