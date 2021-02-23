import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSessionComponent } from './form-session.component';

describe('FormSessionComponent', () => {
  let component: FormSessionComponent;
  let fixture: ComponentFixture<FormSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
