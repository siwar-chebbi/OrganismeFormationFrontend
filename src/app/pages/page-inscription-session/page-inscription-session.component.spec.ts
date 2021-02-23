import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInscriptionSessionComponent } from './page-inscription-session.component';

describe('PageInscriptionSessionComponent', () => {
  let component: PageInscriptionSessionComponent;
  let fixture: ComponentFixture<PageInscriptionSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageInscriptionSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageInscriptionSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
