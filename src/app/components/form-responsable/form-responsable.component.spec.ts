import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResponsableComponent } from './form-responsable.component';

describe('FormResponsableComponent', () => {
  let component: FormResponsableComponent;
  let fixture: ComponentFixture<FormResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormResponsableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
