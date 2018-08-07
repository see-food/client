import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private sessionService: SessionService, private router:Router) { }

  ngOnInit() {
  }

  logout(){
    this.sessionService.logout().subscribe(()=> this.router.navigate(['/home']));
  }
}
