import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
/* declare  var footer_fixed:  any; */

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
	  (function ($) {
      setTimeout(function(){
          
          jQuery('.site-footer').css('display', 'block');
          jQuery('.site-footer').css('height', 'auto');
          var footerHeight = jQuery('.site-footer').outerHeight();
          jQuery('.footer-fixed.page-wraper').css('padding-bottom', footerHeight);
          jQuery('.site-footer').css('height', footerHeight);
          /* footer_fixed(); */
        }, 500);
    })(jQuery);
  
  }
  
  gallery_section = [
    {
      section_title: "",
      section_heading: "",
      section_description: "",
      
      items: [
        {
          image: "pic1.jpg",
          icon_class:"flaticon-decorating",
          catgegory: "",
          heading: "",
          title: "Architecture",
          description: "We are expert and professional.But I must explain to you praising.",
          read_more_text: "Read More",
          read_more_link: "about-1",
         
        },
        {
          image: "pic2.jpg",
          icon_class:"flaticon-paint-brushes",
          catgegory: "",
          heading: "",
          title: "Renovation",
          description: "We are expert and professional.But I must explain to you praising.",
          read_more_text: "Read More",
          read_more_link: "about-1",
        },
        {
          image: "pic3.jpg",
          icon_class:"flaticon-crane",
          catgegory: "",
          heading: "",
          title: "Construction",
          description: "We are expert and professional.But I must explain to you praising.",
          read_more_text: "Read More",
          read_more_link: "about-1",
        },
        
      ]
    }
  ];
  
  our_specialization_section = [
    {
      section_title: "Our specialization",
      section_heading: "Helping you and your house become better acquainted.",
      section_description:"Fited his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly.",
      class_val:"",
      section_class:"",
      section_image:"people-1.png",
      
      ul_points_style1: [
        {
          title: "Always dedicated and devoted.",
        },
        {
          title: "Building it better in concrete.",
        },
        {
          title: "Come home to quality.",
        },
        {
          title: "Construction you can count on.",
        },
        {
          title: "From concept to creation.",
        },
        {
          title: "Masters of Consistency and Quality.",
        },
        {
          title: "Building it better in concrete.",
        },
      ],
      ul_points_style2: [
        {
          title: "Always dedicated and devoted.",
        },
        {
          title: "Building it better in concrete.",
        },
        {
          title: "Come home to quality.",
        },
        {
          title: "Construction you can count on.",
        },
        {
          title: "From concept to creation.",
        },
        {
          title: "Masters of Consistency and Quality.",
        },
        {
          title: "Building it better in concrete.",
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
          read_more_text: "Read More",
          read_more_link: "project-detail",
         
        },
        {
          image: "pic1.jpg",
          catgegory: "",
          heading: "Renovation",
          title: "Modern minimalist house",
          description: "",
          read_more_text: "Read More",
          read_more_link: "project-detail",
        },
        {
          image: "pic2.jpg",
          catgegory: "",
          heading: "Interior",
          title: "Modern minimalist house",
          description: "",
          read_more_text: "Read More",
          read_more_link: "project-detail",
        },
        {
          image: "pic2.jpg",
          catgegory: "",
          heading: "Building",
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
  
  company_staticties_section = [
    {
      section_title: "",
      section_heading: "",
      section_description:"",
      class_val:"",
      section_class:"",
      
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
          title:"YEARS OF EXPERIENCE",
          count:50,
          duration:100,
        },
        {
          title:"WORKERS EMPLOYED",
          count:750,
          duration:50,
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


}
