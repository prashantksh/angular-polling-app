import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {
  rightTitle = 'My Title';
  pollForm: FormGroup;
  constructor() {
    this.pollForm = new FormGroup({
      id: new FormControl(0, Validators.required),
      title: new FormControl(
        '',
        [Validators.required, Validators.minLength(5)],
        this.validateTitle.bind(this)
      ),
      description: new FormControl(''),
      group: new FormControl('Development', Validators.required),
      imageUrl: new FormControl('')
    });
  }

  ngOnInit() {}

  get title() {
    return this.pollForm.controls['title'];
  }

  onSubmit() {
    console.log(this.pollForm.value);
  }

  validateTitle(ctrl: AbstractControl): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const currentTitle = ctrl.value;

        if (this.rightTitle === currentTitle) {
          // Happy case. No validation errors!
          resolve(null);
        } else {
          // Error case!
          resolve({ async_error: true });
        }
      }, 3000);
    });
  }
}
