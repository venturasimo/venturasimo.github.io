import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-box2',
  templateUrl: './icon-box2.component.html',
  styleUrls: ['./icon-box2.component.css']
})
export class IconBox2Component implements OnInit {

  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
  }

}
