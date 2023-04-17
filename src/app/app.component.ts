import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = "Elaine";

  userData = {
    email: "pauloadm2008@gmail.com",
    role: "Admin",
  };

  title = 'AngularMB';
  }
