import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private tstr: ToastrService) { }

  successToast(title, message ){
    this.tstr.success(title, message);
  }
  
  errorToast(title, message){
    this.tstr.error(title, message);
  }

}
