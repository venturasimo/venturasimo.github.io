import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-box3',
  templateUrl: './icon-box3.component.html',
  styleUrls: ['./icon-box3.component.css']
})
export class IconBox3Component implements OnInit {

  @Input() data:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
