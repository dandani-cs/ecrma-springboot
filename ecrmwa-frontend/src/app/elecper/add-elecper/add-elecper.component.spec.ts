import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddElecperComponent } from './add-elecper.component';

describe('AddElecperComponent', () => {
  let component: AddElecperComponent;
  let fixture: ComponentFixture<AddElecperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddElecperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddElecperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
