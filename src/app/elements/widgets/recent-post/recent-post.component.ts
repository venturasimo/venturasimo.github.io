import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recent-post',
  templateUrl: './recent-post.component.html',
  styleUrls: ['./recent-post.component.css']
})
export class RecentPostComponent implements OnInit {

  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
  }

}
