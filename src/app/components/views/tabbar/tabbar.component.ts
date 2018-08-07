import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss']
})
export class TabbarComponent implements OnInit {

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
  }

}
