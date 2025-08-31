import { Component, OnInit, AfterViewInit } from '@angular/core';

import {trigger, state, style, animate, transition, stagger, query } from "@angular/animations"
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('bannerTrigger', [
      transition(":enter", [
        query("*", [
          style({ opacity: 0, transform: "translateX(-50px)" }),
          stagger(50, [
            animate(
              "250ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({ opacity: 1, transform: "none" })
            )
          ])
        ])
      ])
    ])
  ]
})
export class BannerComponent implements OnInit {

    cvName: string = "";

  constructor(
    public analyticsService: AnalyticsService,
    public languageService : LanguageService
  ) { }

  ngOnInit(): void { 
  }
  
    downloadCV(){
      window.open('https://drive.google.com/file/d/1QQa24nYTc5sJVAkyXfh_-rFZ7esyE5gq/view');
  }

}
