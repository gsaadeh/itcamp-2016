import { Component } from '@angular/core';
import { Router, RouteSegment, RouteTree, OnActivate } from '@angular/router';

import { SpeakerService } from './speaker.service';
import { ISpeaker } from './speaker.model';
import { SubBannerComponent } from '../shared/sub-banner/sub-banner.component';

@Component({
    moduleId: module.id,
    templateUrl: 'speaker-list.component.html',
    directives: [SubBannerComponent]
})
export class SpeakerListComponent implements OnActivate {

    title: string = 'Speakers';
    speakers: ISpeaker[];
    errorMessage: string;

    constructor(
        private _router: Router,
        private _speakerService: SpeakerService) { }

    routerOnActivate(curr: RouteSegment, prev?: RouteSegment, currTree?: RouteTree, prevTree?: RouteTree): void {
        this._speakerService.getSpeakers()
            .subscribe(speakers => this.speakers = speakers,
            error => this.errorMessage = <any>error);
    }
}