import { Component, OnInit, Input } from '@angular/core';
import { PollItem } from 'src/_models/poll-item.model';
import { PollService } from '../_services/poll.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-poll-container',
  templateUrl: './poll-container.component.html',
  styleUrls: ['./poll-container.component.css']
})
export class PollContainerComponent implements OnInit {
  items$: Observable<PollItem[]>;
  // items: PollItem[];

  constructor(private pollService: PollService) {}

  ngOnInit() {
    this.items$ = this.pollService.items;
    // this.pollService.items.subscribe(data => {
    //   this.items = data;
    // });
  }
}
