import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllElementsComponent } from './all-elements.component';

describe('AllElementsComponent', () => {
  let component: AllElementsComponent;
  let fixture: ComponentFixture<AllElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
