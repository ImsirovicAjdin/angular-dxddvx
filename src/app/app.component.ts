import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  frontends = [
    {
      name: 'Angular',
      details: [
        { type: 'framework' },
        { currentVersion: 8 }
      ]
    },
    {
      name: 'React',
      details: [
        { type: 'library' },
        { currentVersion: 16.9 }
      ]
    }
  ]

  
}
