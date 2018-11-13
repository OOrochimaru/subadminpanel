import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttptokenInterceptor } from './interceptor/interceptor';
import { UserService } from './services/user.service';
import { ToastrModule } from 'ngx-toastr';
import { ToasterService } from './services/toaster.service';

@NgModule({
  imports: [
    CommonModule,
    ToastrModule.forRoot({preventDuplicates: true})
  ],
  declarations: [],
  providers:[ApiService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttptokenInterceptor, 
      multi: true
    },
    ToasterService,
  ]
})
export class CoreModule { }
