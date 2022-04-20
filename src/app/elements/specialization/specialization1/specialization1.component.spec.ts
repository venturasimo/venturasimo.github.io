import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Specialization1Component } from './specialization1.component';

describe('Specialization1Component', () => {
  let component: Specialization1Component;
  let fixture: ComponentFixture<Specialization1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Specialization1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Specialization1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
