import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowElecpersComponent } from './show-elecpers.component';

describe('ShowElecpersComponent', () => {
  let component: ShowElecpersComponent;
  let fixture: ComponentFixture<ShowElecpersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowElecpersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowElecpersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
