import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private apiService : ApiService) { }
  
  postAjob(url, body){
   return this.apiService.post(url, {data: body});
  }

}
