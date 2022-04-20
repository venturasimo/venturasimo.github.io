import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-post-gallery',
  templateUrl: './post-gallery.component.html',
  styleUrls: ['./post-gallery.component.css']
})
export class PostGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  banner : any = {
		pagetitle: "Post Gallery",
		bg_image: "1.jpg",
		title: "Post Gallery",
	}
  
  posts : any = [
      {
        image: "thum1.jpg",
        title: "",
        url: "",
      },
      {
        image: "thum2.jpg",
        title: "",
        url: "",
      },
      {
        image: "thum3.jpg",
        title: "",
        url: "",
      },
  ];
  customOptions: OwlOptions = {
    loop:true,
    autoplay: true,
    margin:30,
    nav:true,
		items:1,
		dots: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    animateOut:'fadeOut',
  };
  
  related_posts = [
    {
      section_title: "Related posts",
      section_heading: "",
      section_description: "",
      
      items: [
        {
          title: "",
          blog_image: "pic1.jpg",
          post_date:"20 Sep 2018",
          post_author: "Admin",
          post_title: "Your first source for architecture, dsign and art news",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
        },
        {
          title: "",
          blog_image: "pic2.jpg",
          post_date:"20 Sep 2018",
          post_author: "Admin",
          post_title: "Your first source for architecture, dsign and art news",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
        },
        {
          title: "",
          blog_image: "pic3.jpg",
          post_date:"20 Sep 2018",
          post_author: "Admin",
          post_title: "Your first source for architecture, dsign and art news",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
        },
      ]  
    }

  ];


}
