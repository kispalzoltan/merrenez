import { ComponentFixture, TestBed } from '@angular/core/testing';

import { patientAddComponent } from './patient-add.component';

describe('patientAddComponent', () => {
  let component: patientAddComponent;
  let fixture: ComponentFixture<patientAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ patientAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(patientAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
