import { Component, OnInit, Input } from '@angular/core';
declare  var jQuery:  any;
declare  var handleTeamSection:  any;

@Component({
  selector: 'app-our-team2',
  templateUrl: './our-team2.component.html',
  styleUrls: ['./our-team2.component.css']
})
export class OurTeam2Component implements OnInit {

  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
	  (function ($) {
      handleTeamSection();
    })(jQuery);
  
  }

}
