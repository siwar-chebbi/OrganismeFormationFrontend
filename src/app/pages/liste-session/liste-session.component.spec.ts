import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSessionComponent } from './liste-session.component';

describe('ListSessionComponent', () => {
  let component: ListeSessionComponent;
  let fixture: ComponentFixture<ListeSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
