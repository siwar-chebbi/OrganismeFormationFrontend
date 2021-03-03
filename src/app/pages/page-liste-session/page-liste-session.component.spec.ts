import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageListeSessionComponent } from './page-liste-session.component';

describe('PageListSessionComponent', () => {
  let component: PageListeSessionComponent;
  let fixture: ComponentFixture<PageListeSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListeSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListeSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
