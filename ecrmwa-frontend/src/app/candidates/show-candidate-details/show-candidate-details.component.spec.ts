import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCandidateDetailsComponent } from './show-candidate-details.component';

describe('ShowCandidateDetailsComponent', () => {
  let component: ShowCandidateDetailsComponent;
  let fixture: ComponentFixture<ShowCandidateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCandidateDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCandidateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
