import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourJourneyComponent } from './your-journey.component';

describe('YourJourneyComponent', () => {
  let component: YourJourneyComponent;
  let fixture: ComponentFixture<YourJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourJourneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
