import { Component } from '@angular/core';
import { Router, RouteSegment, RouteTree, OnActivate } from '@angular/router';

import { SponsorService } from './sponsor.service';
import { ISponsor } from './sponsor.model';
import { SubBannerComponent } from '../shared/sub-banner/sub-banner.component';

@Component({
  moduleId: module.id,
  selector: 'itc-sponsors',
  templateUrl: 'sponsors.component.html',
  styleUrls: ['sponsors.component.css'],
  providers: [SponsorService],
  directives: [SubBannerComponent]
})
export class SponsorsComponent implements OnActivate {

    title: string = 'Sponsors';
    sponsors: ISponsor[];
    errorMessage: string;

    constructor(
        private _router: Router,
        private _sponsorService: SponsorService) { }

    routerOnActivate(curr: RouteSegment, prev?: RouteSegment, currTree?: RouteTree, prevTree?: RouteTree): void {
        this._sponsorService.getSponsors()
            .subscribe(sponsors => this.sponsors = sponsors,
            error => this.errorMessage = <any>error);
    }

}