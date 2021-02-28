import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormationComponent } from './page-formation.component';

describe('PageFormationComponent', () => {
  let component: PageFormationComponent;
  let fixture: ComponentFixture<PageFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
