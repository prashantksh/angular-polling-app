import { Component } from '@angular/core';

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
  title = 'Hi there!';
  today = new Date();
  pi = 3.14159265359;
  rate = 0.67;
  car = new Car();
}
