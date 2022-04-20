import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about1',
  templateUrl: './about1.component.html',
  styleUrls: ['./about1.component.css']
})
export class About1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  banner : any = {
		pagetitle: "About us",
		bg_image: "1.jpg",
		title: "About 1",
	}
  icon_section = [
    {
      section_title: "",
      section_heading: "",
      section_description:"",
      
      items: [
        {
          icon_class: "flaticon-decorating",
          title: "Interior",
          catgegory: "",
          heading: "",
          description: "There are many variations of pass ages of Ipsum",
          read_more_text: "",
          read_more_link: "",
         
        },
        {
          icon_class: "flaticon-skyline",
          title: "Architecture",
          catgegory: "",
          heading: "",
          description: "There are many variations of pass ages of Ipsum",
          read_more_text: "",
          read_more_link: "",
        },
        {
          icon_class: "flaticon-sketch",
          title: "Planing",
          catgegory: "",
          heading: "",
          description: "There are many variations of pass ages of Ipsum",
          read_more_text: "",
          read_more_link: "",
        },
        {
          icon_class: "flaticon-crane",
          title: "Construction",
          catgegory: "",
          heading: "",
          description: "There are many variations of pass ages of Ipsum",
          read_more_text: "",
          read_more_link: "",
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
  
}
