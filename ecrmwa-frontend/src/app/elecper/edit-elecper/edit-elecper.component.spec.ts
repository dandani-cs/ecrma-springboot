import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditElecperComponent } from './edit-elecper.component';

describe('EditElecperComponent', () => {
  let component: EditElecperComponent;
  let fixture: ComponentFixture<EditElecperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditElecperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditElecperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
