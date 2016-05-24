import { Component, OnInit } from '@angular/core';
import { Router, RouteSegment, RouteTree, OnActivate} from '@angular/router';

import { SubBannerComponent } from '../../shared/sub-banner/sub-banner.component';
import { ISession } from '../session.model';
import { SessionService } from '../session.service';

@Component({
  moduleId: module.id,
  templateUrl: 'session-detail.component.html',
  styleUrls: ['session-detail.component.css'],
  directives: [SubBannerComponent]
})
export class SessionDetailComponent implements OnActivate {
  title: string;
  selectedId: number;
  selectedSession: ISession;
  
  constructor(
    private _router: Router,
    private _sessionService: SessionService) {}

  routerOnActivate(curr: RouteSegment): void {
    this.selectedId = +curr.getParam("id");
    
    this._sessionService.getSession(this.selectedId)
      .subscribe(session => this.selectedSession = session);
  }
  
  goBack(): void {
    this._router.navigate(['/sessions']);
  }

}