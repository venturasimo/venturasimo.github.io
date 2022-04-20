import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-specialization3',
  templateUrl: './specialization3.component.html',
  styleUrls: ['./specialization3.component.css']
})
export class Specialization3Component implements OnInit {

  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
  }

}
