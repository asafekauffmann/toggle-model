import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideCompTestComponent } from './side-comp-test.component';

describe('SideCompTestComponent', () => {
  let component: SideCompTestComponent;
  let fixture: ComponentFixture<SideCompTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideCompTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideCompTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
