import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMinsComponent } from './nav-mins.component';

describe('NavMinsComponent', () => {
  let component: NavMinsComponent;
  let fixture: ComponentFixture<NavMinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavMinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
