import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
  }

  logout(){
    this.sessionService.logout().subscribe();
  }
}
