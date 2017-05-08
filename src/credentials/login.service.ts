import { Injectable } from '@angular/core';
import { Credentials } from './credentials';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface ICredentials {
    userName: string;
    password: string;
}

export interface IAuthentification {
    userName: string;
    user: string;
    roles: string[];
    sessionId: string;
    error: string;
}

@Injectable()
export class LogInService {
    private _serverInfoUrl = 'http://localhost:28940/api/values/login';

    constructor (private _http: Http){

    }

    logIn(userName: string, password: string) {
        var data = new Credentials();
        data.userName = userName;
        data.password = password;

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http.post(this._serverInfoUrl, JSON.stringify(data), { headers: headers })
                        .map((response: Response)  => {
                            let token = <IAuthentification>response.json();
                            if (token && !token.error) {
                                localStorage.setItem('userAuthorisation', JSON.stringify(token));
                            }else{
                                throw new Error(token.error);
                            }
                        });
    };
}