import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBox1Component } from './icon-box1.component';

describe('IconBox1Component', () => {
  let component: IconBox1Component;
  let fixture: ComponentFixture<IconBox1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconBox1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconBox1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
