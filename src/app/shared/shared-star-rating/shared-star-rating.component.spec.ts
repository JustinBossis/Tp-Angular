import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedStarRatingComponent } from './shared-star-rating.component';

describe('StarRatingComponent', () => {
  let component: SharedStarRatingComponent;
  let fixture: ComponentFixture<SharedStarRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedStarRatingComponent]
    });
    fixture = TestBed.createComponent(SharedStarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
