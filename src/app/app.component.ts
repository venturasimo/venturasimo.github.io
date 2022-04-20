import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgcContentOptions, NgcCookieConsentService } from 'ngx-cookieconsent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  
  title = 'construx';

  constructor(private ccService: NgcCookieConsentService, private translateService: TranslateService) {
    
  }

  ngOnInit() {
    this.translateService.addLangs(['ca', 'es']);
    this.translateService.setDefaultLang('ca');

    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/ca|es/) ? browserLang : 'ca');

    this.translateService//
      .get(['cookie.header', 'cookie.message', 'cookie.dismiss', 'cookie.allow', 'cookie.deny', 'cookie.link', 'cookie.policy'])
      .subscribe(data => {
       
        let novaConfig = this.ccService.getConfig();

        let nouContent = new NgcContentOptions();

        nouContent.header = data['cookie.header'];
        nouContent.message = data['cookie.message'];
        nouContent.dismiss = data['cookie.dismiss'];
        nouContent.allow = data['cookie.allow'];
        nouContent.deny = data['cookie.deny'];
        nouContent.link = data['cookie.link'];
        nouContent.policy = data['cookie.policy'];
        novaConfig.content = nouContent;

        this.ccService.destroy();
        this.ccService.init(novaConfig);
        
      });
  }

  ngOnDestroy(): void {
    
  }
  
}
