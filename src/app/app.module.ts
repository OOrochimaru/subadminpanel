import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DialogModule} from 'primeng/dialog';
import { RoutingModule } from './app.routing';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {PanelMenuModule} from 'primeng/panelmenu';
import {DropdownModule} from 'primeng/dropdown';
import { EmployerModule } from './employer/employer.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
// import { ToasterService } from './core/services/toaster.service';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { JobsdetailComponent } from './jobsdetail/jobsdetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {PaginatorModule} from 'primeng/paginator';
import { AddjobComponent } from './jobsdetail/addjob/addjob.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    JobsdetailComponent,
    AddjobComponent,
  ],
  imports: [
    TableModule,
    BrowserModule,
    RouterModule,
    RoutingModule,
    TooltipModule,
    ButtonModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    DropdownModule,
    EmployerModule,
    CoreModule,
    HttpClientModule,
    DialogModule,
    ConfirmDialogModule,
    FormsModule,
    PaginatorModule,
    ReactiveFormsModule,
    ButtonModule,

  ],
  providers: [
    ConfirmationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
