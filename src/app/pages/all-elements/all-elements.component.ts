import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-all-elements',
  templateUrl: './all-elements.component.html',
  styleUrls: ['./all-elements.component.css']
})
export class AllElementsComponent implements OnInit {

  constructor() { }

  
  banner : any = {
		pagetitle: "Accordian",
		bg_image: "6.jpg",
		title: "Accordian",
	}
  
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
