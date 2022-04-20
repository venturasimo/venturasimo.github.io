import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-specialization1',
  templateUrl: './specialization1.component.html',
  styleUrls: ['./specialization1.component.css']
})
export class Specialization1Component implements OnInit {

  @Input() data :any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
