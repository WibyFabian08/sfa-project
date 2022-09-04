import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  NgxMatErrorsModule,
  NGX_MAT_ERROR_DEFAULT_OPTIONS,
  DEFAULT_ERROR_MESSAGES,
  MinError,
} from 'ngx-mat-errors';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { ModalSuccessSendEmailComponent } from './component/modal-success-send-email/modal-success-send-email.component';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';
import { ModalSuccessResetPasswordComponent } from './component/modal-success-reset-password/modal-success-reset-password.component';

export const NGX_MAT_ERROR_DEFAULT_CONFIG: Provider = {
  useFactory: () => {
    return {
      ...DEFAULT_ERROR_MESSAGES,
      min: (error: MinError) =>
        `Min value is ${error.min}, actual is ${error.actual}`,
    };
  },
  provide: NGX_MAT_ERROR_DEFAULT_OPTIONS,
};

@NgModule({
  declarations: [
    AuthComponent,
    LoginPageComponent,
    ForgotPasswordPageComponent,
    ModalSuccessSendEmailComponent,
    ResetPasswordPageComponent,
    ModalSuccessResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    NgxMatErrorsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [NGX_MAT_ERROR_DEFAULT_CONFIG],
})
export class AuthModule {}
