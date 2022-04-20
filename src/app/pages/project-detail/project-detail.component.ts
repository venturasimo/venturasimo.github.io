import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  banner : any = {
		pagetitle: "Project Detail",
		bg_image: "5.jpg",
		title: "Project Detail",
	}
  project_images_section = [
        {
          title: "",
          blog_image: "pic5.jpg",
          post_date:"",
          post_author: "",
          post_title: "",
          description: "",
          comments: "",
          read_more_text: "",
          read_more_link: "",
          category:""
        },
        {
          title: "",
          blog_image: "pic2.jpg",
          post_date:"",
          post_author: "",
          post_title: "",
          description: "",
          comments: "",
          read_more_text: "",
          read_more_link: "",
          category:""
        },
        {
          title: "",
          blog_image: "pic3.jpg",
          post_date:"",
          post_author: "",
          post_title: "",
          description: "",
          comments: "",
          read_more_text: "",
          read_more_link: "",
          category:""
        },
        {
          title: "",
          blog_image: "pic4.jpg",
          post_date:"",
          post_author: "",
          post_title: "",
          description: "",
          comments: "",
          read_more_text: "",
          read_more_link: "",
          category:""
        },
  ]; 
  
}
