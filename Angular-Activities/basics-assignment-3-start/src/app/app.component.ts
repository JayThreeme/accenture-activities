import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  secret = false;
  array = [];

  onToggle() {
    this.secret = !this.secret;
    this.array.push(this.array.length + 1);
  }
}
