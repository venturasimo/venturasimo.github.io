import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Specialization4Component } from './specialization4.component';

describe('Specialization4Component', () => {
  let component: Specialization4Component;
  let fixture: ComponentFixture<Specialization4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Specialization4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Specialization4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
