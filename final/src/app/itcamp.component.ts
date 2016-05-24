import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Routes, ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from '@angular/router';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SubBannerComponent } from './shared/sub-banner/sub-banner.component';

import { HomeComponent } from './home/home.component';
import { SessionsComponent } from './sessions/sessions.component';
import { SpeakerListComponent } from './speakers/speaker-list.component';
import { SponsorsComponent } from './sponsors/sponsors.component';

import { SpeakerService } from './speakers/speaker.service';

@Component({
  moduleId: module.id,
  selector: 'itc-app',
  templateUrl: 'itcamp.component.html',
  styleUrls: ['itcamp.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    HeaderComponent,
    FooterComponent,
    SubBannerComponent,
    ],
  providers: [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    SpeakerService
  ]
})
@Routes([
  {path: '/', component: HomeComponent},
  {path: '/speakers', component: SpeakerListComponent},
  {path: '/sessions', component: SessionsComponent},
  {path: '/home', component: HomeComponent},
  {path: '/sponsors', component: SponsorsComponent}
])
export class ItcampAppComponent {

}
