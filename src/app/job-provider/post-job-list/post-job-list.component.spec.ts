import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostJobListComponent } from './post-job-list.component';

describe('PostJobListComponent', () => {
  let component: PostJobListComponent;
  let fixture: ComponentFixture<PostJobListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostJobListComponent]
    });
    fixture = TestBed.createComponent(PostJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
