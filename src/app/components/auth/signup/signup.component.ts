import { Component } from '@angular/core';
import { SessionService } from '../../../services/session.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  message: String

  constructor(private sessionService: SessionService, private router: Router) { }

  signup(username: string, email: string, password: string) {
    this.sessionService.signup(username, email, password).subscribe( (res: any) => {
      if (res._id) {
        this.router.navigate(['/']);
      } else {
        this.message = JSON.parse(res._body).message
      }
    });
  }
}
