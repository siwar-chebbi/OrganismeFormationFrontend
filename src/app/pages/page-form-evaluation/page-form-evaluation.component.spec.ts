import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormEvaluationComponent } from './page-form-evaluation.component';

describe('PageFormEvaluationComponent', () => {
  let component: PageFormEvaluationComponent;
  let fixture: ComponentFixture<PageFormEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFormEvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFormEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
