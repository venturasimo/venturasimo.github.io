import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTeam2Component } from './our-team2.component';

describe('OurTeam2Component', () => {
  let component: OurTeam2Component;
  let fixture: ComponentFixture<OurTeam2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurTeam2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurTeam2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
