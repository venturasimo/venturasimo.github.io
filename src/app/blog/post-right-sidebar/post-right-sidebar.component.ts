import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-right-sidebar',
  templateUrl: './post-right-sidebar.component.html',
  styleUrls: ['./post-right-sidebar.component.css']
})
export class PostRightSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  banner : any = {
		pagetitle: "Post right sidebar",
		bg_image: "3.jpg",
		title: "Post right sidebar",
	}
  
  recent_post_section = [
    
    {
      section_title: "Recent Posts",
      section_heading: "",
      section_description: "",
      
      items: [
        {
          title: "All fine architectural values are human values, else not valuable.",
          blog_image: "pic1.jpg",
          post_date:"25 Dec",
          post_author: "",
          post_title: "",
          read_more_text: "",
          read_more_link: "",
          comments: "20",
        },
        {
          title: "All fine architectural values are human values, else not valuable.",
          blog_image: "pic2.jpg",
          post_date:"25 Dec",
          post_author: "",
          post_title: "",
          read_more_text: "",
          read_more_link: "",
          comments: "15",
        },
        {
          title: "All fine architectural values are human values, else not valuable.",
          blog_image: "pic3.jpg",
          post_date:"25 Dec",
          post_author: "",
          post_title: "",
          read_more_text: "",
          read_more_link: "",
          comments: "11",
        },
      ]
    }      
  ];
  
  gallery : any = [
    {
      section_title: "Our Gallery",
      section_heading: "",
      section_description: "",
      
      items: [
        {
          image: "pic1.jpg",
          title: "",
          url: "",
        },
        {
          image: "pic2.jpg",
          title: "",
          url: "",
        },
        {
          image: "pic3.jpg",
          title: "",
          url: "",
        },
        {
          image: "pic4.jpg",
          title: "",
          url: "",
        },
        {
          image: "pic5.jpg",
          title: "",
          url: "",
        },
        {
          image: "pic6.jpg",
          title: "",
          url: "",
        },
      ]
    }
        
  ];
  
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
      ]  
    }

  ];


}
