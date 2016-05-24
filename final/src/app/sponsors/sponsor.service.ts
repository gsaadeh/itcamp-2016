import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ISponsor } from './sponsor.model';

@Injectable()
export class SponsorService {
    private _sponsorUrl = 'api/sponsors.json';

    constructor(private _http: Http) { }

    getSponsors(): Observable<ISponsor[]> {
        return this._http.get(this._sponsorUrl)
            .map((response: Response) => <ISponsor[]>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}