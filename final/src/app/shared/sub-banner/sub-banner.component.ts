import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'itc-sub-banner',
  templateUrl: 'sub-banner.component.html',
  styleUrls: ['sub-banner.component.css']
})
export class SubBannerComponent implements OnInit {
  
  @Input() title: string = '';

  constructor() {}

  ngOnInit() {
  }

}
