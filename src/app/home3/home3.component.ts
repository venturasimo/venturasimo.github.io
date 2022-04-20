import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css']
})
export class Home3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
	  (function ($) {
      setTimeout(function(){
          
          jQuery('.site-footer').css('display', 'block');
          jQuery('.site-footer').css('height', 'auto');
          var footerHeight = jQuery('.site-footer').outerHeight();
          jQuery('.footer-fixed.page-wraper').css('padding-bottom', footerHeight);
          jQuery('.site-footer').css('height', footerHeight);
        }, 500);
    })(jQuery);
  
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
          description: "There are many variations of pass ages of Ipsum",
          read_more_text: "Read More",
          read_more_link: "about-1",
         
        },
        {
          icon_class: "flaticon-skyline",
          title: "Architecture",
          catgegory: "",
          heading: "",
          description: "There are many variations of pass ages of Ipsum",
          read_more_text: "Read More",
          read_more_link: "about-1",
        },
        {
          icon_class: "flaticon-sketch",
          title: "Planing",
          catgegory: "",
          heading: "",
          description: "There are many variations of pass ages of Ipsum",
          read_more_text: "Read More",
          read_more_link: "about-1",
        },
        {
          icon_class: "flaticon-crane",
          title: "Construction",
          catgegory: "",
          heading: "",
          description: "There are many variations of pass ages of Ipsum",
          read_more_text: "Read More",
          read_more_link: "about-1",
        },
        
      ]
    }
  ];
  
  company_staticties_section = [
    {
      section_title: "Our specialization",
      section_heading: "Helping you and your house become better acquainted.",
      section_description:"Fited his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly.",
      
      
      items: [
        {
          title:"PROJECT COMPLETED",
          count:250,
          duration:50,
        },
        {
          title:"HAPPY CLIENTS",
          count:300,
          duration:50,
        },
        {
          title:"WORKERS EMPLOYED",
          count:750,
          duration:50,
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
          read_more_text: "Read More",
          read_more_link: "project-detail",
         
        },
        {
          image: "pic2.jpg",
          catgegory: "",
          heading: "Renovation",
          title: "Modern minimalist house",
          description: "",
          read_more_text: "Read More",
          read_more_link: "project-detail",
        },
        {
          image: "pic3.jpg",
          catgegory: "",
          heading: "Interior",
          title: "Modern minimalist house",
          description: "",
          read_more_text: "Read More",
          read_more_link: "project-detail",
        },
        {
          image: "pic4.jpg",
          catgegory: "",
          heading: "Construction",
          title: "Modern minimalist house",
          description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          read_more_text: "Read More",
          read_more_link: "project-detail",
        },
        {
          image: "pic5.jpg",
          catgegory: "",
          heading: "Renovation",
          title: "Modern minimalist house",
          description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          read_more_text: "Read More",
          read_more_link: "project-detail",
        },
        {
          image: "pic6.jpg",
          catgegory: "",
          heading: "Interior",
          title: "Modern minimalist house",
          description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          read_more_text: "Read More",
          read_more_link: "project-detail",
        },
        {
          image: "pic1.jpg",
          catgegory: "",
          heading: "Construction",
          title: "Modern minimalist house",
          description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          read_more_text: "Read More",
          read_more_link: "project-detail",
        },
        {
          image: "pic2.jpg",
          catgegory: "",
          heading: "Renovation",
          title: "Modern minimalist house",
          description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          read_more_text: "Read More",
          read_more_link: "project-detail",
        },
        {
          image: "pic3.jpg",
          catgegory: "",
          heading: "Interior",
          title: "Modern minimalist house",
          description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          read_more_text: "Read More",
          read_more_link: "project-detail",
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
          name: "Mariya Newman",
          role: "Project Manager",
          image: "pic5.jpg",
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
          name: "Michael evens",
          role: "Marketing manager",
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
        {
          name: "Devead Newman",
          role: "Project Manager",
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
          name: "Pamela Smith",
          role: "Project Manager",
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
