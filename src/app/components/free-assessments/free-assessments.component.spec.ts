import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeAssessmentsComponent } from './free-assessments.component';

describe('FreeAssessmentsComponent', () => {
  let component: FreeAssessmentsComponent;
  let fixture: ComponentFixture<FreeAssessmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeAssessmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeAssessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
