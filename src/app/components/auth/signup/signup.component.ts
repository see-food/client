import { Component } from '@angular/core';
import { SessionService } from '../../../services/session.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private sessionService: SessionService, private router: Router) { }

  signup(username: string, email: string, password: string) {
    console.log('signup');
    this.sessionService.signup(username, email, password).subscribe( (user: any) => {
      this.router.navigate(['/']);
    });
  }
}
