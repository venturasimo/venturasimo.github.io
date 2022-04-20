import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog1',
  templateUrl: './blog1.component.html',
  styleUrls: ['./blog1.component.css']
})
export class Blog1Component implements OnInit {

  @Input() data:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
