import { Component } from '@angular/core';

import { LogInService } from '../credentials/logIn.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogInService]
})
export class AppComponent {
  title = 'app works!';
  userName = 'milan';
  password = 'password';
  serverInfos: string

  constructor (private _logInService: LogInService) {

  }

  // ngOnInit(): void{
  //   this._logInService.logIn(this.userName, this.password).subscribe(
  //     serverInfos => this.serverInfos = serverInfos);
  // }

  logIn(): void{
    this._logInService.logIn(this.userName, this.password).subscribe(
        (result) =>
         this.serverInfos = "success",
        (error) => { 
          this.serverInfos = "error"; })
  }
}
