import { Component, OnInit } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { SessionListComponent } from './session-list/session-list.component';
import { SessionDetailComponent } from './session-detail/session-detail.component';
import { SessionService } from './session.service';

@Component({
    moduleId: module.id,
    selector: 'itc-sessions-root',
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [SessionService]
})
@Routes([
      {path: '/', component: SessionListComponent},
      {path: '/list', component: SessionListComponent},
      {path: '/:id', component: SessionDetailComponent},
])
export class SessionsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}