import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseGuardService {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ):  Observable<boolean> | Promise<boolean> | UrlTree | boolean {

      const confirm =  window.confirm("Etes vous sur ?");
      if (!confirm){
        this.router.navigate(["about"])
      }
      return true;

    }
}
