import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTwocompComponent } from './all-twocomp.component';

describe('AllTwocompComponent', () => {
  let component: AllTwocompComponent;
  let fixture: ComponentFixture<AllTwocompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTwocompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTwocompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
