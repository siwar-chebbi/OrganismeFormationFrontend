import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSessionComponent } from './page-session.component';

describe('PageSessionComponent', () => {
  let component: PageSessionComponent;
  let fixture: ComponentFixture<PageSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
