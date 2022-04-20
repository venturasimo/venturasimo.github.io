import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Specialization2Component } from './specialization2.component';

describe('Specialization2Component', () => {
  let component: Specialization2Component;
  let fixture: ComponentFixture<Specialization2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Specialization2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Specialization2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
