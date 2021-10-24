import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCandidatesByPartyComponent } from './search-candidates-by-party.component';

describe('SearchCandidatesByPartyComponent', () => {
  let component: SearchCandidatesByPartyComponent;
  let fixture: ComponentFixture<SearchCandidatesByPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCandidatesByPartyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCandidatesByPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
