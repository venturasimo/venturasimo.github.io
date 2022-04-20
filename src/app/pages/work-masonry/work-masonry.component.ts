import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
declare  var handleMasonryFilter2:  any;

@Component({
  selector: 'app-work-masonry',
  templateUrl: './work-masonry.component.html',
  styleUrls: ['./work-masonry.component.css']
})
export class WorkMasonryComponent implements OnInit {

  constructor() { }

  banner : any = {
		pagetitle: "Work Masonry",
		bg_image: "1.jpg",
		title: "Work Masonry",
	}
  news_grid_section = [
        {
          title: "Web Design / Graphic",
          blog_image: "assets/images/gallery/portrait/pic1.jpg",
          post_date:"",
          post_author: "",
          post_title: "Rooms & Halls",
          description: "",
          comments: "",
          read_more_text: "",
          read_more_link: "project-detail",
          category:""
        },
        {
          title: "Web Design / Graphic",
          blog_image: "assets/images/gallery/pic6.jpg",
          post_date:"",
          post_author: "",
          post_title: "To-Do Dashboard",
          description: "",
          comments: "",
          read_more_text: "",
          read_more_link: "project-detail",
          category:""
        },
        {
          title: "Web Design / Graphic",
          blog_image: "assets/images/gallery/portrait/pic2.jpg",
          post_date:"",
          post_author: "",
          post_title: "WhereTO App",
          description: "",
          comments: "",
          read_more_text: "",
          read_more_link: "project-detail",
          category:""
        },
        {
          title: "Web Design / Graphic",
          blog_image: "assets/images/gallery/pic7.jpg",
          post_date:"",
          post_author: "",
          post_title: "Rooms & Halls",
          description: "",
          comments: "",
          read_more_text: "",
          read_more_link: "project-detail",
          category:""
        },
        {
          title: "Web Design / Graphic",
          blog_image: "assets/images/gallery/portrait/pic3.jpg",
          post_date:"",
          post_author: "",
          post_title: "Events and More",
          description: "",
          comments: "",
          read_more_text: "",
          read_more_link: "project-detail",
          category:""
        },
        {
          title: "Web Design / Graphic",
          blog_image: "assets/images/gallery/pic8.jpg",
          post_date:"",
          post_author: "",
          post_title: "Remind~Me More",
          description: "",
          comments: "",
          read_more_text: "",
          read_more_link: "project-detail",
          category:""
        },
        {
          title: "Web Design / Graphic",
          blog_image: "assets/images/gallery/portrait/pic4.jpg",
          post_date:"",
          post_author: "",
          post_title: "Workout Buddy",
          description: "",
          comments: "",
          read_more_text: "",
          read_more_link: "project-detail",
          category:""
        },
        {
          title: "Web Design / Graphic",
          blog_image: "assets/images/gallery/pic9.jpg",
          post_date:"",
          post_author: "",
          post_title: "Speed Detector",
          description: "",
          comments: "",
          read_more_text: "",
          read_more_link: "project-detail",
          category:""
        },
        {
          title: "Web Design / Graphic",
          blog_image: "assets/images/gallery/portrait/pic5.jpg",
          post_date:"",
          post_author: "",
          post_title: "Generic Apps",
          description: "",
          comments: "",
          read_more_text: "",
          read_more_link: "project-detail",
          category:""
        },
        {
          title: "Web Design / Graphic",
          blog_image: "assets/images/gallery/pic1.jpg",
          post_date:"",
          post_author: "",
          post_title: "Generic Apps",
          description: "",
          comments: "",
          read_more_text: "",
          read_more_link: "project-detail",
          category:""
        },
        {
          title: "Web Design / Graphic",
          blog_image: "assets/images/gallery/pic2.jpg",
          post_date:"",
          post_author: "",
          post_title: "Speed Detector",
          description: "",
          comments: "",
          read_more_text: "",
          read_more_link: "project-detail",
          category:""
        },
    
  ];
  
  ngOnInit(): void {
	  (function ($) {
      
      handleMasonryFilter2();
      
    })(jQuery);
  
  }

}
