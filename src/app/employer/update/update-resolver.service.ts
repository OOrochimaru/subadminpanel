import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { User } from '../../core/model/user';
import { Observable } from 'rxjs';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UpdateResolver implements Resolve<User> {

  constructor(private userService: UserService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
    return this.userService.getUser(route.params['userid']).pipe(catchError(err => this.router.navigate(['/'])))
  }

}
