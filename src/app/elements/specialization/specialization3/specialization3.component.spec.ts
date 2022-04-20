import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Specialization3Component } from './specialization3.component';

describe('Specialization3Component', () => {
  let component: Specialization3Component;
  let fixture: ComponentFixture<Specialization3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Specialization3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Specialization3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
