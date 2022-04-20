import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
	  (function ($) {
      setTimeout(function(){
          jQuery(window).on('scroll', function () {
                    var scroll = jQuery(window).scrollTop();
                    
                    if(scroll >= 100) {
                      jQuery(".sticky-header").addClass("color-fill");
                      jQuery(".sticky-header").addClass("is-fixed");
                    } else {
                        jQuery(".sticky-header").removeClass("color-fill");
                        jQuery(".sticky-header").removeClass("is-fixed");
                    }
                  });  
          }, 500);
    })(jQuery);
  }

}
