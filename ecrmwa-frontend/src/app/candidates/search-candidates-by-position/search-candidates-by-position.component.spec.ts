import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCandidatesByPositionComponent } from './search-candidates-by-position.component';

describe('SearchCandidatesByPositionComponent', () => {
  let component: SearchCandidatesByPositionComponent;
  let fixture: ComponentFixture<SearchCandidatesByPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCandidatesByPositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCandidatesByPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
