import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
declare  var handleMasonryFilter2:  any;

@Component({
  selector: 'app-news-grid',
  templateUrl: './news-grid.component.html',
  styleUrls: ['./news-grid.component.css']
})
export class NewsGridComponent implements OnInit {

  constructor() { }
  
  banner : any = {
		pagetitle: "News Grid",
		bg_image: "2.jpg",
		title: "News Grid",
	}
  news_grid_section = [
        {
          title: "",
          blog_image: "pic1.jpg",
          post_date:"<strong>20 Feb</strong> <span> 2018</span>",
          post_author: "Admin",
          post_title: "Being a famous designer is like being a famous dentist.",
          description: "Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse",
          comments: "10",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
          category:"cat-1"
        },
        {
          title: "",
          blog_image: "pic2.jpg",
          post_date:"<strong>20 Feb</strong> <span> 2018</span>",
          post_author: "Admin",
          post_title: "Being a famous designer is like being a famous dentist.",
          description: "Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse",
          comments: "10",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
          category:"cat-2"
        },
        {
          title: "",
          blog_image: "pic3.jpg",
          post_date:"<strong>20 Feb</strong> <span> 2018</span>",
          post_author: "Admin",
          post_title: "Being a famous designer is like being a famous dentist.",
          description: "Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse",
          comments: "10",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
          category:"cat-3"
        },
        {
          title: "",
          blog_image: "pic4.jpg",
          post_date:"<strong>20 Feb</strong> <span> 2018</span>",
          post_author: "Admin",
          post_title: "Being a famous designer is like being a famous dentist.",
          description: "Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse",
          comments: "10",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
          category:"cat-4"
        },
        {
          title: "",
          blog_image: "pic5.jpg",
          post_date:"<strong>20 Feb</strong> <span> 2018</span>",
          post_author: "Admin",
          post_title: "Being a famous designer is like being a famous dentist.",
          description: "Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse",
          comments: "10",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
          category:"cat-5"
        },
        {
          title: "",
          blog_image: "pic6.jpg",
          post_date:"<strong>20 Feb</strong> <span> 2018</span>",
          post_author: "Admin",
          post_title: "Being a famous designer is like being a famous dentist.",
          description: "Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse",
          comments: "10",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
          category:"cat-4"
        },
        {
          title: "",
          blog_image: "pic7.jpg",
          post_date:"<strong>20 Feb</strong> <span> 2018</span>",
          post_author: "Admin",
          post_title: "Being a famous designer is like being a famous dentist.",
          description: "Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse",
          comments: "10",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
          category:"cat-3"
        },
        {
          title: "",
          blog_image: "pic8.jpg",
          post_date:"<strong>20 Feb</strong> <span> 2018</span>",
          post_author: "Admin",
          post_title: "Being a famous designer is like being a famous dentist.",
          description: "Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse",
          comments: "10",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
          category:"cat-2"
        },
        {
          title: "",
          blog_image: "pic9.jpg",
          post_date:"<strong>20 Feb</strong> <span> 2018</span>",
          post_author: "Admin",
          post_title: "Being a famous designer is like being a famous dentist.",
          description: "Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse",
          comments: "10",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
          category:"cat-1"
        },
        {
          title: "",
          blog_image: "pic1.jpg",
          post_date:"<strong>20 Feb</strong> <span> 2018</span>",
          post_author: "Admin",
          post_title: "Being a famous designer is like being a famous dentist.",
          description: "Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse",
          comments: "10",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
          category:"cat-1"
        },
        {
          title: "",
          blog_image: "pic2.jpg",
          post_date:"<strong>20 Feb</strong> <span> 2018</span>",
          post_author: "Admin",
          post_title: "Being a famous designer is like being a famous dentist.",
          description: "Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse",
          comments: "10",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
          category:"cat-1"
        },
        {
          title: "",
          blog_image: "pic3.jpg",
          post_date:"<strong>20 Feb</strong> <span> 2018</span>",
          post_author: "Admin",
          post_title: "Being a famous designer is like being a famous dentist.",
          description: "Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse",
          comments: "10",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
          category:"cat-1"
        },
    
  ];
  
  ngOnInit(): void {
	  (function ($) {
        handleMasonryFilter2();
    })(jQuery);
  
  }

}
