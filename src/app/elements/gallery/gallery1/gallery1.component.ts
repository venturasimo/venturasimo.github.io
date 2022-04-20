import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery1',
  templateUrl: './gallery1.component.html',
  styleUrls: ['./gallery1.component.css']
})
export class Gallery1Component implements OnInit {

  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
  }

}
