import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLeftsComponent } from './nav-lefts.component';

describe('NavLeftsComponent', () => {
  let component: NavLeftsComponent;
  let fixture: ComponentFixture<NavLeftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavLeftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLeftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
