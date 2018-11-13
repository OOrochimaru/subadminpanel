import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }
  getUsers(url){
   return this.apiService.get(url);
  }
  getUser(userid){
    return this.apiService.get(userid).pipe(map(data => data));
  }

  updateUser(url, body){
    return this.apiService.update(url, body);
  }

  deleteUser(url){
    return this.apiService.delete(url);
  }

  getSearchedUsers(url, body){
    return this.apiService.post(url, body);
  }

  getPaginationUsers(url, body){
    return this.apiService.post(url, body);
  }

}
