import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkMasonryComponent } from './work-masonry.component';

describe('WorkMasonryComponent', () => {
  let component: WorkMasonryComponent;
  let fixture: ComponentFixture<WorkMasonryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkMasonryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkMasonryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
