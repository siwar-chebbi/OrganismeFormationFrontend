import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPrerequisComponent } from './test-prerequis.component';

describe('TestPrerequisComponent', () => {
  let component: TestPrerequisComponent;
  let fixture: ComponentFixture<TestPrerequisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPrerequisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPrerequisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
