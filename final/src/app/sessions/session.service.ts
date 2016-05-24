import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ISession } from './session.model';

@Injectable()
export class SessionService {
    private _sessionsUrl = "api/sessions.json";

    constructor(private _http: Http) { }

    getSessions(): Observable<ISession[]> {
        return this._http.get(this._sessionsUrl)
            .map((response: Response) => <ISession[]>response.json())
            .do(data => console.log(JSON.stringify(data)))
            .catch(this.handleError);
    }

    getSession(id: number): Observable<ISession> {
        return this.getSessions()
            .map((sessions: ISession[]) => sessions.find(p => p.id === id));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}