import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
declare  var jQuery:  any;
declare  var handleHamburgerMenu:  any;


@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {

  constructor(private translateService: TranslateService) {
    
  }

  currentLang: any;

  ngOnInit(): void {
	  (function ($) {
        handleHamburgerMenu();
    })(jQuery);
  }

  public canviarIdioma(lang: string) {
    this.translateService.use(lang);
    this.currentLang = this.translateService.currentLang;
  }

}
