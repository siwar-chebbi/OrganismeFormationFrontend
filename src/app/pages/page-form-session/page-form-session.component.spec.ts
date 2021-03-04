import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormSessionComponent } from './page-form-session.component';

describe('PageFormSessionComponent', () => {
  let component: PageFormSessionComponent;
  let fixture: ComponentFixture<PageFormSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFormSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFormSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
