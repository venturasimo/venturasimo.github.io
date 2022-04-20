import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare  var jQuery:  any;
@Component({
  selector: 'app-our-gallery',
  templateUrl: './our-gallery.component.html',
  styleUrls: ['./our-gallery.component.css']
})
export class OurGalleryComponent implements OnInit {

  @Input() data:any;
  constructor() { }

  
  
  customOptions: OwlOptions = {
    loop:true,
    autoplay: true,
    margin:15,
    nav:false,
		dots:true,
    items:2,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    
  }
  
    ngOnInit(): void {
	  (function ($) {
      
      setTimeout(function(){
          jQuery('.mfp-gallery').magnificPopup({
            delegate: '.mfp-link',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
              enabled: true,
              navigateByImgClick: true,
              preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
              tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            }
          });
    
      }, 500);      
    })(jQuery);
  
  }

}
