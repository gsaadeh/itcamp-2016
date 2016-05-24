import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, Router, RouteSegment, RouteTree, OnActivate } from '@angular/router';

import { SubBannerComponent } from '../../shared/sub-banner/sub-banner.component';
import { SessionDetailComponent } from '../session-detail/session-detail.component';
import { ISession } from '../session.model';
import { SessionService } from '../session.service';
import { SessionFilterPipe } from './session-filter.pipe';

@Component({
    moduleId: module.id,
    templateUrl: 'session-list.component.html',
    styleUrls: ['session-list.component.css'],
    directives: [
        ROUTER_DIRECTIVES, 
        SubBannerComponent
    ],
    pipes: [SessionFilterPipe]
})
export class SessionListComponent implements OnActivate {
    constructor(
        private _router: Router,
        private _sessionService: SessionService) { }

    title: string = 'Sessions';
    sessions: ISession[];
    errorMessage: string;
    filterString: string;

    routerOnActivate(curr: RouteSegment, prev?: RouteSegment, currTree?: RouteTree, prevTree?: RouteTree): void {
        this._sessionService.getSessions()
            .subscribe(sessions => this.sessions = sessions,
            error => this.errorMessage = <any>error);
    }

    clearFilter(): void {
        this.filterString = "";
    }

}
