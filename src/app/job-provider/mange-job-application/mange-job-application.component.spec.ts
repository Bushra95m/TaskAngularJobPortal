import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeJobApplicationComponent } from './mange-job-application.component';

describe('MangeJobApplicationComponent', () => {
  let component: MangeJobApplicationComponent;
  let fixture: ComponentFixture<MangeJobApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MangeJobApplicationComponent]
    });
    fixture = TestBed.createComponent(MangeJobApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
