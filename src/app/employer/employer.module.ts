import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerComponent } from './employer.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {PanelMenuModule} from 'primeng/panelmenu';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddComponent } from './add/add.component';
import { EmployerRoutingModule } from './employer.routing';
import { UpdateComponent } from './update/update.component';
import { BillingComponent } from './billing/billing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateResolver } from './update/update-resolver.service';
// import {DataTableModule} from 'primeng/primeng'
import { FormsModule } from '@angular/forms';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

import {PaginatorModule} from 'primeng/paginator';
import {NgxScrollToFirstInvalidModule} from '@ismaestro/ngx-scroll-to-first-invalid';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule, TableModule, 
    TooltipModule,
    PanelMenuModule,
    DropdownModule,
    BrowserAnimationsModule,
    EmployerRoutingModule,
    ReactiveFormsModule,
    // DataTableModule,
    FormsModule,
    PaginatorModule,
    NgxScrollToFirstInvalidModule,
    ConfirmDialogModule
  ],
  declarations: [
    EmployerComponent,
    AddComponent,
    UpdateComponent,
    BillingComponent
  ],
  providers: [UpdateResolver,
    ConfirmationService
  ], 
  exports:[
  ]
})
export class EmployerModule { }
