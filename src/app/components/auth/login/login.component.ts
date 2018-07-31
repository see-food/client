import { Component } from '@angular/core';
import { SessionService } from '../../../services/session.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private sessionService: SessionService, private router: Router) { }

  login(username:string, password:string){
    console.log('login');
    this.sessionService.login(username, password).subscribe( (user: any) => this.router.navigate(['/']))
  }
}
