import { Component, OnInit } from '@angular/core';

import { ServerInfoService } from './serverInfo.service';

@Component({
  selector: 'app-serverinfos',
  templateUrl: './serverInfo-list.component.html',
  providers: [ServerInfoService]
})

export class ServerInfoList implements OnInit{
    title = 'Server Info List';
    error: string;
    
    constructor (private _serverInfoService: ServerInfoService) {

     }

    ngOnInit(): void{
    };

    editServerInfo(): void {
        this._serverInfoService.getServerInfos().subscribe(
        (result) => {
            this.error = 'no error';
        },
        (error) => { 
          this.error = "error"; })
    };

    
}