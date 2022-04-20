import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
	  (function ($) {
      
      setTimeout(function(){
          jQuery("button.scroltop").on('click', function() {
            jQuery("html, body").animate({
              scrollTop: 0
            }, 1000);
            return false;
          });

          jQuery(window).on("scroll", function() {
            var scroll = jQuery(window).scrollTop();
            if (scroll > 900) {
              jQuery("button.scroltop").fadeIn(1000);
            } else {
              jQuery("button.scroltop").fadeOut(1000);
            }
          });
      }, 500);      
    })(jQuery);
  
  }

}
