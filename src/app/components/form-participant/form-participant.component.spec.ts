import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormParticipantComponent } from './form-participant.component';

describe('FormParticipantComponent', () => {
  let component: FormParticipantComponent;
  let fixture: ComponentFixture<FormParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormParticipantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
