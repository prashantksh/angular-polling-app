import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poll-container',
  templateUrl: './poll-container.component.html',
  styleUrls: ['./poll-container.component.css']
})
export class PollContainerComponent implements OnInit {
  @Input() title;

  constructor() {}

  ngOnInit() {}
}
