import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner1',
  templateUrl: './banner1.component.html',
  styleUrls: ['./banner1.component.css']
})
export class Banner1Component implements OnInit {

  @Input() data : any;

  constructor() { }

  ngOnInit(): void {
  }

}
