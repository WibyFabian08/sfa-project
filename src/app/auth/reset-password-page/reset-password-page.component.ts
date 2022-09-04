import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalSuccessResetPasswordComponent } from '../component/modal-success-reset-password/modal-success-reset-password.component';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['./reset-password-page.component.css']
})
export class ResetPasswordPageComponent implements OnInit {
  form = new FormGroup({
    newPassword: new FormControl("", [Validators.required]),
    confirmPassword: new FormControl("", [Validators.required])
  });
  isVisibleNewPassword: boolean = true;
  isVisibleConfirmPassword: boolean = true;
  iconPasswordColor: string = "icon"

  constructor(
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  handleSubmit = () => {
    if (this.form.invalid) {
      this.iconPasswordColor = "icon-red"
      Object.keys(this.form.controls).forEach((field) => {
        const control: any = this.form.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    } else {
      this.iconPasswordColor = "icon"
      alert("Sukses")
    }
  };

  handleShowNewPassword = () => {
    this.isVisibleNewPassword = !this.isVisibleNewPassword;
  };

  handleShowConfirmPassword = () => {
    this.isVisibleConfirmPassword = !this.isVisibleConfirmPassword;
  };

  openDialog() {
    this.dialog.open(ModalSuccessResetPasswordComponent, {
      panelClass: "custom-dialog"
    })
  }

}
