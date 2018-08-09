import { CanActivate, Router } from '@angular/router';
import { Injectable }  from '@angular/core';
import { SessionService } from './session.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SessionGuardService implements CanActivate {
  constructor(private sessionService: SessionService, private router: Router) {
  }
  canActivate(): Observable<boolean>{
    return this.sessionService.isLogged().pipe(
      map(resp=>{
        if(resp.status == 403){
          this.router.navigate(['/login']);
          return false;
        } else return true;
    }))
  }
}