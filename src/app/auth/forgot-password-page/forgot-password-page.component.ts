import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalSuccessSendEmailComponent } from '../component/modal-success-send-email/modal-success-send-email.component';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.css']
})
export class ForgotPasswordPageComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  isVisible: boolean = false;
  isAlertShow: boolean = false
  isEmailValid: boolean = true

  constructor(
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  handleSubmit = () => {
    this.isEmailValid = false
    if (this.form.invalid) {
      this.isAlertShow = true
      Object.keys(this.form.controls).forEach((field) => {
        const control: any = this.form.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    } else {
      console.log(this.form.value);
    }
  };

  handleHideAlert = () => {
    this.isAlertShow = false
  }

  openDialog() {
    this.dialog.open(ModalSuccessSendEmailComponent, {
      panelClass: "custom-dialog"
    })
  }

}
