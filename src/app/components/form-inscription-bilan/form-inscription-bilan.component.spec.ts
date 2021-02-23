import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInscriptionBilanComponent } from './form-inscription-bilan.component';

describe('FormInscriptionBilanComponent', () => {
  let component: FormInscriptionBilanComponent;
  let fixture: ComponentFixture<FormInscriptionBilanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInscriptionBilanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInscriptionBilanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
