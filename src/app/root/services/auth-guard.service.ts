import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public router: Router) { }
  canActivate(): boolean {
    if (localStorage.getItem('doctorid') === '' || localStorage.getItem('doctorid') === null) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
