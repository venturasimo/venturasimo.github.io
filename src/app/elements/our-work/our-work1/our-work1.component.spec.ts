import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWork1Component } from './our-work1.component';

describe('OurWork1Component', () => {
  let component: OurWork1Component;
  let fixture: ComponentFixture<OurWork1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurWork1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurWork1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
