import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecperComponent } from './elecper.component';

describe('ElecperComponent', () => {
  let component: ElecperComponent;
  let fixture: ComponentFixture<ElecperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElecperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElecperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
