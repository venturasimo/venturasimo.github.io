import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-our-team1',
  templateUrl: './our-team1.component.html',
  styleUrls: ['./our-team1.component.css']
})
export class OurTeam1Component implements OnInit {

  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
  }

}
