import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home4',
  templateUrl: './home4.component.html',
  styleUrls: ['./home4.component.css']
})
export class Home4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  icon_section = [
    {
      section_title: "",
      section_heading: "",
      section_description:"",
      
      items: [
        {
          icon_class: "flaticon-paint-brushes",
          title: "Renovation",
          catgegory: "",
          heading: "",
          description: "There are many variations of pass ages of Ipsum. qui dolorem ipsum quia dolor sit amet",
          read_more_text: "",
          read_more_link: "",
          count: "01",
          container_class:"step-blocks-one",
         
        },
        {
          icon_class: "flaticon-decorating",
          title: "Interior",
          catgegory: "",
          heading: "",
          description: "There are many variations of pass ages of Ipsum. qui dolorem ipsum quia dolor sit amet",
          read_more_text: "",
          read_more_link: "",
          count: "02",
          container_class:"step-blocks-two",
        },
        {
          icon_class: "flaticon-skyline",
          title: "Architecture",
          catgegory: "",
          heading: "",
          description: "There are many variations of pass ages of Ipsum. qui dolorem ipsum quia dolor sit amet",
          read_more_text: "",
          read_more_link: "",
          count: "03",
          container_class:"step-blocks-one",
        },
        {
          icon_class: "flaticon-sketch",
          title: "Planing",
          catgegory: "",
          heading: "",
          description: "There are many variations of pass ages of Ipsum. qui dolorem ipsum quia dolor sit amet",
          read_more_text: "",
          read_more_link: "",
          count: "04",
          container_class:"step-blocks-two",
        },
        
      ]
    }
  ];
  our_specialization_section = [
    {
      section_title: "Our specialization",
      section_heading: "Why choose us",
      section_description:"",
      class_val:"",
      section_class:"",
      section_image:"people-1.png",
      
      items: [
        {
          icon_class: "flaticon-trophy",
          catgegory: "",
          heading: "",
          title: "Consecutive Award winning",
          description: "Lorem Ipsum is simply dummy text of the printing and type setting.",
          url: "",
         
        },
        {
          icon_class: "flaticon-sketching",
          catgegory: "",
          heading: "",
          title: "we are creative designers",
          description: "Lorem Ipsum is simply dummy text of the printing and type setting.",
          url: "",
        },
        {
          icon_class: "flaticon-diamond",
          catgegory: "",
          heading: "",
          title: "heigh quality products",
          description: "Lorem Ipsum is simply dummy text of the printing and type setting.",
          url: "",
        },
        {
          icon_class: "flaticon-support",
          catgegory: "",
          heading: "",
          title: "24/7 customer support",
          description: "Lorem Ipsum is simply dummy text of the printing and type setting.",
          url: "",
        },
      ]
    }
  ];
  
  our_work_section = [
    {
      section_title: "Recently finished",
      section_heading: "Recent projects",
      section_description:"",
      class_val:"",
      section_class:"",
      
      items: [
        {
          image: "pic1.jpg",
          catgegory: "",
          heading: "Construction",
          title: "Modern minimalist house",
          description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          url: "project-detail",
         
        },
        {
          image: "pic2.jpg",
          catgegory: "",
          heading: "Renovation",
          title: "Modern minimalist house",
          description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          url: "project-detail",
        },
        {
          image: "pic3.jpg",
          catgegory: "",
          heading: "Interior",
          title: "Modern minimalist house",
          description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          url: "project-detail",
        },
        {
          image: "pic4.jpg",
          catgegory: "",
          heading: "Construction",
          title: "Modern minimalist house",
          description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          url: "project-detail",
        },
        {
          image: "pic5.jpg",
          catgegory: "",
          heading: "Renovation",
          title: "Modern minimalist house",
          description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          url: "project-detail",
        },
        {
          image: "pic6.jpg",
          catgegory: "",
          heading: "Interior",
          title: "Modern minimalist house",
          description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          url: "project-detail",
        },
        {
          image: "pic1.jpg",
          catgegory: "",
          heading: "Construction",
          title: "Modern minimalist house",
          description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          url: "project-detail",
        },
        {
          image: "pic2.jpg",
          catgegory: "",
          heading: "Renovation",
          title: "Modern minimalist house",
          description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          url: "project-detail",
        },
        {
          image: "pic3.jpg",
          catgegory: "",
          heading: "Interior",
          title: "Modern minimalist house",
          description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          url: "project-detail",
        },
        
      ]
    }
  ];
  
  our_team = [
    {
      section_title: "Our best team",
      section_heading: "Our team",
      section_description: "",
      
      team: [
        {
          name: "Richard Wagner",
          role: "Contractor",
          image: "pic1.jpg",
          social_link: [
            {
              title:"facebook",
              icon_class:"fa-facebook",
              link:"https://www.facebook.com/dexignzone",
            },
            {
              title:"twitter",
              icon_class:"fa-twitter",
              link:"https://twitter.com/dexignzones",
            },
            {
              title:"linkedin",
              icon_class:"fa-linkedin",
              link:"https://www.linkedin.com/showcase/dexignzone",
            },
            {
              title:"pinterest",
              icon_class:"fa-pinterest",
              link:"https://www.pinterest.com/dexignzone/",
            }
          ]
        },
        {
          name: "Lisa Anderson",
          role: "Contractor",
          image: "pic2.jpg",
          social_link: [
            {
              title:"facebook",
              icon_class:"fa-facebook",
              link:"https://www.facebook.com/dexignzone",
            },
            {
              title:"twitter",
              icon_class:"fa-twitter",
              link:"https://twitter.com/dexignzones",
            },
            {
              title:"linkedin",
              icon_class:"fa-linkedin",
              link:"https://www.linkedin.com/showcase/dexignzone",
            },
            {
              title:"pinterest",
              icon_class:"fa-pinterest",
              link:"https://www.pinterest.com/dexignzone/",
            }
          ]
        },
        {
          name: "Tommy Atkins",
          role: "Contractor",
          image: "pic3.jpg",
          social_link: [
            {
              title:"facebook",
              icon_class:"fa-facebook",
              link:"https://www.facebook.com/dexignzone",
            },
            {
              title:"twitter",
              icon_class:"fa-twitter",
              link:"https://twitter.com/dexignzones",
            },
            {
              title:"linkedin",
              icon_class:"fa-linkedin",
              link:"https://www.linkedin.com/showcase/dexignzone",
            },
            {
              title:"pinterest",
              icon_class:"fa-pinterest",
              link:"https://www.pinterest.com/dexignzone/",
            }
          ]
        },
      ]
    }
  ];
  
  clients : any = [
      {
        image: "w1.png",
        title: "",
        url: "",
      },
      {
        image: "w2.png",
        title: "",
        url: "",
      },
      {
        image: "w3.png",
        title: "",
        url: "",
      },
      {
        image: "w4.png",
        title: "",
        url: "",
      },
      {
        image: "w5.png",
        title: "",
        url: "",
      },
      {
        image: "w6.png",
        title: "",
        url: "",
      },
  ];
  
  testimonials = [
    {
      section_title: "Client Says",
      section_heading: "Testimonials",
      section_description: "",
      
      testimonial: [
        {
          name: "RINDA SMITH",
          role: "Contractor",
          image: "pic1.jpg",
          description: "Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat condimentum velit class aptent taciti sociosqu ad litora torquent per conubia nostra.",
        },
        {
          name: "RINDA SMITH",
          role: "Founder",
          image: "pic2.jpg",
          description: "Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat condimentum velit class aptent taciti sociosqu ad litora torquent per conubia nostra.",
        },
        {
          name: "RINDA SMITH",
          role: "Founder",
          image: "pic1.jpg",
          description: "Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat condimentum velit class aptent taciti sociosqu ad litora torquent per conubia nostra.",
        },
        {
          name: "RINDA SMITH",
          role: "Founder",
          image: "pic1.jpg",
          description: "Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat condimentum velit class aptent taciti sociosqu ad litora torquent per conubia nostra.",
        },
        {
          name: "RINDA SMITH",
          role: "Founder",
          image: "pic2.jpg",
          description: "Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat condimentum velit class aptent taciti sociosqu ad litora torquent per conubia nostra.",
        },
        {
          name: "RINDA SMITH",
          role: "Founder",
          image: "pic1.jpg",
          description: "Nulla metus metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat condimentum velit class aptent taciti sociosqu ad litora torquent per conubia nostra.",
        },
      ]
    }
  ];
  
  blogs = [
    {
      section_title: "Recent blog",
      section_heading: "Latest News",
      section_description: "",
      
      items: [
        {
          title: "",
          blog_image: "pic1.jpg",
          post_date:"20 Sep 2018",
          post_author: "Admin",
          post_title: "Your first source for architecture, dsign and art news",
          read_more_text: "Read More",
          read_more_link: "",
        },
        {
          title: "",
          blog_image: "pic2.jpg",
          post_date:"20 Sep 2018",
          post_author: "Admin",
          post_title: "Your first source for architecture, dsign and art news",
          read_more_text: "Read More",
          read_more_link: "",
        },
        {
          title: "",
          blog_image: "pic3.jpg",
          post_date:"20 Sep 2018",
          post_author: "Admin",
          post_title: "Your first source for architecture, dsign and art news",
          read_more_text: "Read More",
          read_more_link: "",
        },
      ]  
    }

  ];
  
  
}
