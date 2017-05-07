import { Injectable } from '@angular/core';
import { IServerInfo } from './serverinfo';
import { Http } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ServerInfoService {
    private _serverInfoUrl = 'http://localhost:28940/api/values';

    constructor (private _http: Http){

    }

    getServerInfos(): Observable<IServerInfo[]> {
        return this._http.get(this._serverInfoUrl)
                   .map((response)  => response.json());

        // return [
        //     {
        //         "serverId": "server1",
        //         "serverName": "server1:8080",
        //         "isActive": true,
        //         "region": "EMEA"
        //     },
        //                 {
        //         "serverId": "server2",
        //         "serverName": "server2:8080",
        //         "isActive": false,
        //         "region": "US"
        //     }
        // ];
    }
}