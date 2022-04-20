import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-our-work1',
  templateUrl: './our-work1.component.html',
  styleUrls: ['./our-work1.component.css']
})
export class OurWork1Component implements OnInit {
  
  @Input() data:any;
    
  constructor() { }

  ngOnInit(): void {
  }
  
  customOptions: OwlOptions = {
    loop:false,
    autoplaySpeed: 3000,
    navSpeed: 3000,
    /* paginationSpeed: 3000, */
    /* slideSpeed: 3000, */
    smartSpeed: 3000,
    autoplay: true,
    margin:30,
    nav:false,
		dots: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive:{
      0:{
				items:1
			},
			480:{
				items:1
			},
			580:{
				items:2
			},						
			767:{
				items:2
			},
			991:{
				items:3
			},			
			1152:{
				items:3
			},
			1360:{
				items:3
			},
			1366:{
				items:3
			}
    },
  }

}
