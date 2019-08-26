import { Component } from '@angular/core';
import { interval } from 'rxjs';

class Car {
  name = 'BMW';
  owner = 'ABCD';
  Speed = 120;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  val = 'Hello there';

  getMessage() {
    return 'This is title';
  }
}
