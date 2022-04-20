import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-specialization2',
  templateUrl: './specialization2.component.html',
  styleUrls: ['./specialization2.component.css']
})
export class Specialization2Component implements OnInit {

  @Input() data:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
