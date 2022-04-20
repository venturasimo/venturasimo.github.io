import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
declare  var handleMasonryFilter2:  any;

@Component({
  selector: 'app-work-grid',
  templateUrl: './work-grid.component.html',
  styleUrls: ['./work-grid.component.css']
})
export class WorkGridComponent implements OnInit {

  constructor() { }

  banner : any = {
		pagetitle: "Work Grid",
		bg_image: "2.jpg",
		title: "Work Grid",
	}
  
  news_grid_section = [
        {
          title: "Web Design / Graphic",
          blog_image: "pic1.jpg",
          post_date:"",
          post_author: "",
          post_title: "Rooms & Halls",
          description: "",
          comments: "",
          read_more_text: "Read More",
          read_more_link: "project-detail",
          category:"cat-1"
        },
        {
          title: "Web Design / Graphic",
          blog_image: "pic2.jpg",
          post_date:"",
          post_author: "",
          post_title: "To-Do Dashboard",
          description: "",
          comments: "",
          read_more_text: "Read More",
          read_more_link: "project-detail",
          category:"cat-2"
        },
        {
          title: "Web Design / Graphic",
          blog_image: "pic4.jpg",
          post_date:"",
          post_author: "",
          post_title: "WhereTO App",
          description: "",
          comments: "",
          read_more_text: "Read More",
          read_more_link: "project-detail",
          category:"cat-3"
        },
        {
          title: "Web Design / Graphic",
          blog_image: "pic4.jpg",
          post_date:"",
          post_author: "",
          post_title: "Rooms & Halls",
          description: "",
          comments: "",
          read_more_text: "Read More",
          read_more_link: "project-detail",
          category:"cat-4"
        },
        {
          title: "Web Design / Graphic",
          blog_image: "pic5.jpg",
          post_date:"",
          post_author: "",
          post_title: "Events and More",
          description: "",
          comments: "",
          read_more_text: "Read More",
          read_more_link: "project-detail",
          category:"cat-5"
        },
        {
          title: "Web Design / Graphic",
          blog_image: "pic6.jpg",
          post_date:"",
          post_author: "",
          post_title: "Remind~Me More",
          description: "",
          comments: "",
          read_more_text: "Read More",
          read_more_link: "project-detail",
          category:"cat-4"
        },
        {
          title: "Web Design / Graphic",
          blog_image: "pic7.jpg",
          post_date:"",
          post_author: "",
          post_title: "Workout Buddy",
          description: "",
          comments: "",
          read_more_text: "Read More",
          read_more_link: "project-detail",
          category:"cat-3"
        },
        {
          title: "Web Design / Graphic",
          blog_image: "pic8.jpg",
          post_date:"",
          post_author: "",
          post_title: "Speed Detector",
          description: "",
          comments: "",
          read_more_text: "Read More",
          read_more_link: "project-detail",
          category:"cat-2"
        },
        {
          title: "Web Design / Graphic",
          blog_image: "pic9.jpg",
          post_date:"",
          post_author: "",
          post_title: "Generic Apps",
          description: "",
          comments: "",
          read_more_text: "Read More",
          read_more_link: "project-detail",
          category:"cat-1"
        },
    
  ];
  
  ngOnInit(): void {
	  (function ($) {
      
      handleMasonryFilter2();
    
    })(jQuery);
  
  }

}
