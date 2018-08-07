import { Component } from '@angular/core';
import { SessionService } from '../../../services/session.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message: String

  constructor(private sessionService: SessionService, private router: Router) { }

  login(username:string, password:string){
    this.sessionService.login(username, password).subscribe( (res: any) => {
      if (res._id) {
        this.router.navigate(['/'])
      } else {
        this.message = JSON.parse(res._body).message
      }
    })
  }
}
