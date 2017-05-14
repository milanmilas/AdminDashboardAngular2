import { Component } from '@angular/core';
import { ActivatedRoute, Router }       from '@angular/router';

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

  constructor (
    private _logInService: LogInService,
    private router: Router) { }

  logIn(): void{
    this._logInService.logIn(this.userName, this.password).subscribe(
        (result) => {
         this.serverInfos = "success";
         this.router.navigate(['/serverInfoList']);
        },
        (error) => { 
          this.serverInfos = "error"; })
  };

  logout(): void{
    this._logInService.logout();
  };

  isLoggedIn(): boolean{
    let result = !!localStorage.getItem('userAuthorisation');
    return result;
  };

  loggedInUser(): string{
    return "loged in user";
  };
}
