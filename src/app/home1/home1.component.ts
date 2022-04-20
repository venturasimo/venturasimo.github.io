import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  our_specialization_section = [
    {
      section_title: "home.especialitzacio",
      section_heading: "home.perque",
      section_description:"",
      class_val:"",
      section_class:"",
      section_image:"people-1.png",
      
      items: [
        {
          icon_class: "flaticon-construction-worker",
          catgegory: "",
          heading: "",
          title: "home.items.01.titol",
          description: "home.items.01.descripcio",
          url: "",
         
        },
        {
          icon_class: "flaticon-architect-with-helmet",
          catgegory: "",
          heading: "",
          title: "home.items.02.titol",
          description: "home.items.02.descripcio",
          url: "",
        },
        {
          icon_class: "flaticon-helmet",
          catgegory: "",
          heading: "",
          title: "home.items.03.titol",
          description: "home.items.03.descripcio",
          url: "",
        },
        {
          icon_class: "flaticon-diamond",
          catgegory: "",
          heading: "",
          title: "home.items.04.titol",
          description: "home.items.04.descripcio",
          url: "",
        },
      ]
    }
  ];

  
}
