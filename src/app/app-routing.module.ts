import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { JobSeekerProfileComponent } from './job-seeker/job-seeker-profile/job-seeker-profile.component';
import { JobNotificationsComponent } from './job-seeker/job-notifications/job-notifications.component';
import { JobSearchComponent } from './job-seeker/job-search/job-search.component';
import { SignUPComponent } from './sign-up/sign-up.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { MyProfileComponent } from './my-profile/my-profile.component';




const routes: Routes = [
  {path:'',component:HomeComponent},
 
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'seekerProfile',
  children: [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'profile', component: JobSeekerProfileComponent },
    { path: 'notifications', component: JobNotificationsComponent },
    { path: 'jobSearch', component: JobSearchComponent}
  ]},
  {path:'signUp',component:SignUPComponent},
  {path:'dashbord',component:DashbordComponent},
  {path:'myProfile',component:MyProfileComponent}

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
