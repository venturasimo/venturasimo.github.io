import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-call-to-action1',
  templateUrl: './call-to-action1.component.html',
  styleUrls: ['./call-to-action1.component.css']
})
export class CallToAction1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
	  (function ($) {
      setTimeout(function(){
          jQuery('.mfp-video').magnificPopup({
            type: 'iframe',
          });
        }, 500);
    })(jQuery);
  
  }

}
