import { Component } from '@angular/core';

@Component({
  selector: 'app-assignmenttwo',
  templateUrl: './assignmenttwo.component.html',
  styleUrl: './assignmenttwo.component.css',
})
export class AssignmenttwoComponent {
  username = '';
  createusername = '';

  constructor() {}

  onUsername() {
    this.createusername = 'Username Created ' + this.username;
  }

  isButtonEmpty() {
    if (this.username == '') {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {}
}
