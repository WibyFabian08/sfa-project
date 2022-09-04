import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSuccessResetPasswordComponent } from './modal-success-reset-password.component';

describe('ModalSuccessResetPasswordComponent', () => {
  let component: ModalSuccessResetPasswordComponent;
  let fixture: ComponentFixture<ModalSuccessResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSuccessResetPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSuccessResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
