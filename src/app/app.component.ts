import { Component } from '@angular/core';

// Note: initialed once tied to a variable html and css
// aspect oriented programming
@Component({
  // how would appear in dom
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// can be imported by others
export class AppComponent {
  title = 'app';
}
