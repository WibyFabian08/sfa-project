import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSuccessSendEmailComponent } from './modal-success-send-email.component';

describe('ModalSuccessSendEmailComponent', () => {
  let component: ModalSuccessSendEmailComponent;
  let fixture: ComponentFixture<ModalSuccessSendEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSuccessSendEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSuccessSendEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
