import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobNotificationsComponent } from './job-notifications/job-notifications.component';
import { JobSearchComponent } from './job-search/job-search.component';
import { JobSeekerProfileComponent } from './job-seeker-profile/job-seeker-profile.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashbordComponent } from '../dashbord/dashbord.component';
import { MyProfileComponent } from '../my-profile/my-profile.component';



@NgModule({
  declarations: [
    JobNotificationsComponent,
    JobSearchComponent,
    JobSeekerProfileComponent,
    DashbordComponent,
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class JobSeekerModule { }
