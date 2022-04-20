import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonial1',
  templateUrl: './testimonial1.component.html',
  styleUrls: ['./testimonial1.component.css']
})
export class Testimonial1Component implements OnInit {

  @Input() data:any;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  customOptions: OwlOptions = {
    loop:true,
    /* autoplaySpeed: 3000,
    navSpeed: 3000,
    smartSpeed: 3000, */
    autoplay: true,
    margin:30,
    nav:false,
		dots: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive:{
      0:{
				items:1
			},
			991:{
				items:2
			}
    },
  }
  
}
