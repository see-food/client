import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  user: any;
  constructor(private sessionService: SessionService) { 
  }

  ngOnInit() {
    this.sessionService.isLogged().subscribe(user=>{
      this.user=user;
    })
  }

}
