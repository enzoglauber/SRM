import { Component, ViewEncapsulation } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(private _tokenService: Angular2TokenService) {
    setTheme('bs4'); // or 'bs4'
    this._tokenService.init({
      apiPath: 'http://localhost:4000',
      signInRedirect: '/login',
      globalOptions: {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    });
  }
}