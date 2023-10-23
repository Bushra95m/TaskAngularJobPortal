import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekerProfileComponent } from './job-seeker-profile.component';

describe('JobSeekerProfileComponent', () => {
  let component: JobSeekerProfileComponent;
  let fixture: ComponentFixture<JobSeekerProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobSeekerProfileComponent]
    });
    fixture = TestBed.createComponent(JobSeekerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
