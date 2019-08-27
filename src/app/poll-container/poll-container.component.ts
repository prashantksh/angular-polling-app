import { Component, OnInit, Input } from '@angular/core';
import { PollItem } from 'src/_models/poll-item.model';
import { PollService } from '../_services/poll.service';

@Component({
  selector: 'app-poll-container',
  templateUrl: './poll-container.component.html',
  styleUrls: ['./poll-container.component.css']
})
export class PollContainerComponent implements OnInit {
  constructor(private pollService: PollService) {}

  ngOnInit() {}
}
