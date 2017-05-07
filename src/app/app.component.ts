import { Component } from '@angular/core';

import { IServerInfo } from '../serverinfo/serverInfo';

import { ServerInfoService } from '../serverinfo/serverInfo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServerInfoService]
})
export class AppComponent {
  title = 'app works!';
  userName = 'milan';
  password = 'password';
  serverInfos: IServerInfo[]

  constructor (private _serverInfoService: ServerInfoService) {

  }

  ngOnInit(): void{
    this._serverInfoService.getServerInfos().subscribe(
      serverInfos => this.serverInfos = serverInfos);
  }

  logIn(): void{
    this.userName = 'clicked'
  }
}
