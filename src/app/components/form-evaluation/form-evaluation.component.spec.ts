import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEvaluationComponent } from './form-evaluation.component';

describe('FormEvaluationComponent', () => {
  let component: FormEvaluationComponent;
  let fixture: ComponentFixture<FormEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
