import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ISpeaker } from './speaker.model';

@Injectable()
export class SpeakerService {
    private _speakersUrl = "api/speakers.json";

    constructor(private _http: Http) { }

    getSpeakers(): Observable<ISpeaker[]> {
        return this._http.get(this._speakersUrl)
            .map((response: Response) => <ISpeaker[]>response.json())
            .do(data => console.log(JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}