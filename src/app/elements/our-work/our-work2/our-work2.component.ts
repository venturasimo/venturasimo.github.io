import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-our-work2',
  templateUrl: './our-work2.component.html',
  styleUrls: ['./our-work2.component.css']
})
export class OurWork2Component implements OnInit {

  @Input() data:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
