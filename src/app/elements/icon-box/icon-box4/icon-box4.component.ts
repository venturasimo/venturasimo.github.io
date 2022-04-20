import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-box4',
  templateUrl: './icon-box4.component.html',
  styleUrls: ['./icon-box4.component.css']
})
export class IconBox4Component implements OnInit {

  @Input() data:any;

  constructor() { }

  ngOnInit(): void {
  }

}
