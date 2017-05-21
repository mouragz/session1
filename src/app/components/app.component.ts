import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <input type="text" autoGrow/>
  <courses></courses>
  `,
})
export class AppComponent {
  name = 'Angular';
}
