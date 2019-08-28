import { Component, OnInit } from '@angular/core';
import { PollService } from '../_services/poll.service';

@Component({
  selector: 'app-tform',
  templateUrl: './tform.component.html',
  styleUrls: ['./tform.component.css']
})
export class TformComponent implements OnInit {
  constructor(private pollService: PollService) {}

  ngOnInit() {}

  onSubmit(value) {
    console.log('Submitted', value);
    this.pollService.createPollItem(value).subscribe(response => {
      console.log('Server', response);
    });
  }
}
