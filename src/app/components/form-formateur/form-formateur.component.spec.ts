import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFormateurComponent } from './form-formateur.component';

describe('FormFormateurComponent', () => {
  let component: FormFormateurComponent;
  let fixture: ComponentFixture<FormFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFormateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
