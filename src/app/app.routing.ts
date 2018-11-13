import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployerComponent } from './employer/employer.component';
// import { JobsdetailComponent } from './jobsdetail/jobsdetail.component';
import { AddjobComponent } from './jobsdetail/addjob/addjob.component';

const route : Routes = [
    {path: '', component: DashboardComponent, pathMatch: 'full'},
    // {path: 'jobsdetail', component: JobsdetailComponent},
    {path: 'addjob', component: AddjobComponent},
]
@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(route)
  ],
  providers: [],
  exports:[RouterModule]
})
export class RoutingModule { }