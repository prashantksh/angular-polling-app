import { Component, OnInit } from '@angular/core';
import { PollService } from '../_services/poll.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tform',
  templateUrl: './tform.component.html',
  styleUrls: ['./tform.component.css']
})
export class TformComponent implements OnInit {
  constructor(
    private pollService: PollService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit(value) {
    console.log('Submitted', value);
    this.pollService.createPollItem(value).subscribe(response => {
      this.toastr.success(response.message, 'Http Success');
      this.router.navigate(['/dashboard']);
    });
  }
}
