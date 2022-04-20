import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWork3Component } from './our-work3.component';

describe('OurWork3Component', () => {
  let component: OurWork3Component;
  let fixture: ComponentFixture<OurWork3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurWork3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurWork3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
