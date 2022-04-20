import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter1',
  templateUrl: './counter1.component.html',
  styleUrls: ['./counter1.component.css']
})
export class Counter1Component implements OnInit {

  @Input() data:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
