import { Component, OnInit } from '@angular/core';
import { PollService } from '../_services/poll.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private pollService: PollService) {}

  ngOnInit() {}
}
