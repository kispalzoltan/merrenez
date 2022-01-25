import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionScreenComponent } from './opinion-screen.component';

describe('OpinionScreenComponent', () => {
  let component: OpinionScreenComponent;
  let fixture: ComponentFixture<OpinionScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpinionScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
