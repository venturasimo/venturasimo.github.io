import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWork2Component } from './our-work2.component';

describe('OurWork2Component', () => {
  let component: OurWork2Component;
  let fixture: ComponentFixture<OurWork2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurWork2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurWork2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
