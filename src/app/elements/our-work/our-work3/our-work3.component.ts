import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-our-work3',
  templateUrl: './our-work3.component.html',
  styleUrls: ['./our-work3.component.css']
})
export class OurWork3Component implements OnInit {

  @Input() data:any;
    
  constructor() { }

  ngOnInit(): void {
  }
  
  customOptions: OwlOptions = {
    loop:false,
    autoplaySpeed: 3000,
    navSpeed: 3000,
    smartSpeed: 3000,
    autoplay: true,
    margin:20,
    nav:true,
		dots: false,
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
				items:4
			},
			1360:{
				items:4
			},
			1366:{
				items:5
			}
    },
  }
  
}
