import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
declare  var handleMasonryFilter2:  any;

@Component({
  selector: 'app-news-masonry',
  templateUrl: './news-masonry.component.html',
  styleUrls: ['./news-masonry.component.css']
})
export class NewsMasonryComponent implements OnInit {

  constructor() { }

  
  banner : any = {
		pagetitle: "News Masonry",
		bg_image: "2.jpg",
		title: "News Masonry",
	}
  
  news_grid_section = [
        {
          title: "",
          blog_image: "assets/images/gallery/portrait/pic1.jpg",
          post_date:"<strong>20 Feb</strong> <span> 2018</span>",
          post_author: "Admin",
          post_title: "Architecture is the will of an epoch translated into space.",
          description: "Asperiores, tenetur, blanditiis, quaerat odit exerci tationem pariatur qui busdam veritatis quis quam labor iosam esse",
          comments: "",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
          category:""
        },
        {
          title: "",
          blog_image: "assets/images/gallery/pic2.jpg",
          post_date:"<strong>20 Feb</strong> <span> 2018</span>",
          post_author: "Admin",
          post_title: "Design is where science and art break even.",
          description: "Asperiores, tenetur, blanditiis, quaerat odit exerci tationem pariatur qui busdam veritatis quis quam labor iosam esse",
          comments: "",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
          category:""
        },
        {
          title: "",
          blog_image: "assets/images/gallery/portrait/pic3.jpg",
          post_date:"<strong>20 Feb</strong> <span> 2018</span>",
          post_author: "Admin",
          post_title: "Architecture is the art of how to waste space.",
          description: "Asperiores, tenetur, blanditiis, quaerat odit exerci tationem pariatur qui busdam veritatis quis quam labor iosam esse",
          comments: "",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
          category:""
        },
        {
          title: "",
          blog_image: "assets/images/gallery/portrait/pic1.jpg",
          post_date:"<strong>20 Feb</strong> <span> 2018</span>",
          post_author: "Admin",
          post_title: "A designer is a planner with an aesthetic sense.",
          description: "Asperiores, tenetur, blanditiis, quaerat odit exerci tationem pariatur qui busdam veritatis quis quam labor iosam esse",
          comments: "",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
          category:""
        },
        {
          title: "",
          blog_image: "assets/images/gallery/portrait/pic5.jpg",
          post_date:"<strong>20 Feb</strong> <span> 2018</span>",
          post_author: "Admin",
          post_title: "Being a famous designer is like being a famous dentist.",
          description: "Asperiores, tenetur, blanditiis, quaerat odit exerci tationem pariatur qui busdam veritatis quis quam labor iosam esse",
          comments: "",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
          category:""
        },
        {
          title: "",
          blog_image: "assets/images/gallery/pic6.jpg",
          post_date:"<strong>20 Feb</strong> <span> 2018</span>",
          post_author: "Admin",
          post_title: "Being a famous designer is like being a famous dentist.",
          description: "Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse",
          comments: "",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
          category:""
        },
        {
          title: "",
          blog_image: "assets/images/gallery/portrait/pic4.jpg",
          post_date:"<strong>20 Feb</strong> <span> 2018</span>",
          post_author: "Admin",
          post_title: "Being a famous designer is like being a famous dentist.",
          description: "Asperiores, tenetur, blanditiis, quaerat odit exerci tationem pariatur qui busdam veritatis quis quam labor iosam esse",
          comments: "",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
          category:""
        },
        {
          title: "",
          blog_image: "assets/images/gallery/pic7.jpg",
          post_date:"<strong>20 Feb</strong> <span> 2018</span>",
          post_author: "Admin",
          post_title: "Architecture is the art of how to waste space.",
          description: "Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse",
          comments: "",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
          category:""
        },
        {
          title: "",
          blog_image: "assets/images/gallery/pic8.jpg",
          post_date:"<strong>20 Feb</strong> <span> 2018</span>",
          post_author: "Admin",
          post_title: "Architecture is the art of how to waste space.",
          description: "Asperiores, tenetur, blanditiis, quaerat odit exerci tationem pariatur qui busdam veritatis quis quam labor iosam esse",
          comments: "",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
          category:""
        },
        {
          title: "",
          blog_image: "assets/images/gallery/portrait/pic2.jpg",
          post_date:"<strong>20 Feb</strong> <span> 2018</span>",
          post_author: "Admin",
          post_title: "Architecture is the art of how to waste space.",
          description: "Asperiores, tenetur, blanditiis, quaerat odit exerci tationem pariatur qui busdam veritatis quis quam labor iosam esse",
          comments: "",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
          category:""
        },
        {
          title: "",
          blog_image: "assets/images/gallery/pic9.jpg",
          post_date:"<strong>20 Feb</strong> <span> 2018</span>",
          post_author: "Admin",
          post_title: "Design is where science and art break even.",
          description: "Asperiores, tenetur, blanditiis, quaerat odit exerci tationem pariatur qui busdam veritatis quis quam labor iosam esse",
          comments: "",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
          category:""
        },
        {
          title: "",
          blog_image: "assets/images/gallery/pic1.jpg",
          post_date:"<strong>20 Feb</strong> <span> 2018</span>",
          post_author: "Admin",
          post_title: "Design is where science and art break even.",
          description: "Asperiores, tenetur, blanditiis, quaerat odit exerci tationem pariatur qui busdam veritatis quis quam labor iosam esse",
          comments: "",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
          category:""
        },
    
  ];
  ngOnInit(): void {
	  (function ($) {
      
        handleMasonryFilter2();
        
    })(jQuery);
  
  }

}
