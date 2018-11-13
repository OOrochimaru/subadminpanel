import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EmployerComponent } from './employer.component';
import { UpdateComponent } from './update/update.component';
import { BillingComponent } from './billing/billing.component';
import { UpdateResolver } from './update/update-resolver.service';


const route: Routes =[
  {path: 'employers',
  children: [
    {path: '', component:EmployerComponent},
    {path: 'addEmployer', component: AddComponent},
    {path: 'updateEmployer',
    children: [
      {path: ':userid',resolve:{ userData: UpdateResolver }, component: UpdateComponent}
    ]  
  },
    {path: 'billingDetails', component: BillingComponent }
  ]
},
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class EmployerRoutingModule { }
