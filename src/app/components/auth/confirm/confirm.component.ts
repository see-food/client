import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  
  userId: string;
  constructor(private sessionService: SessionService,  private router: Router, private route: ActivatedRoute) { }

  ngOnInit(){
    this.route.params.subscribe(params => this.userId = params['id'])
    this.sessionService.confirm(this.userId).subscribe(()=> this.router.navigate(['/']));
  }

}
