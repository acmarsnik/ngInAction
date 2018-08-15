import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { UserService } from '../../services/user/user.service';



@Injectable({
  providedIn: 'root'
})
export class HasUserGuard implements CanActivate {
  constructor(private userService: UserService) {
  }

  canActivate(): Observable<boolean> {
    return this.userService.user().pipe(first(), map(user => !!user));
  }
}
