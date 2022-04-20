import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-listing',
  templateUrl: './news-listing.component.html',
  styleUrls: ['./news-listing.component.css']
})
export class NewsListingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  banner : any = {
		pagetitle: "News Listing",
		bg_image: "3.jpg",
		title: "News Listing",
	}
  
  news_listing_section = [
        {
          title: "",
          blog_image: "thum1.jpg",
          post_date:"<strong>20 Feb</strong> <span> 2018</span>",
          post_author: "Admin",
          post_title: "Being a famous designer is like being a famous dentist.",
          description: "The longer I live, the more beautiful life becomes. If you foolishly ignore beauty, you will soon find yourself without it. Your life will be impoverished. But if you invest in beauty, it will remain with you all the days of your life.",
          comments: "10",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
          category:""
        },
        {
          title: "",
          blog_image: "thum2.jpg",
          post_date:"<strong>20 Feb</strong> <span> 2018</span>",
          post_author: "Admin",
          post_title: "Architecture is not based on concrete and steel, and the elements of the soil. It's based on wonder.",
          description: "The longer I live, the more beautiful life becomes. If you foolishly ignore beauty, you will soon find yourself without it. Your life will be impoverished. But if you invest in beauty, it will remain with you all the days of your life.",
          comments: "10",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
          category:""
        },
        {
          title: "",
          blog_image: "thum3.jpg",
          post_date:"<strong>20 Feb</strong> <span> 2018</span>",
          post_author: "Admin",
          post_title: "An object should be judged by whether it has a form consistent with its use.",
          description: "The longer I live, the more beautiful life becomes. If you foolishly ignore beauty, you will soon find yourself without it. Your life will be impoverished. But if you invest in beauty, it will remain with you all the days of your life.",
          comments: "10",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
          category:""
        },
        {
          title: "",
          blog_image: "thum4.jpg",
          post_date:"<strong>20 Feb</strong> <span> 2018</span>",
          post_author: "Admin",
          post_title: "Very often the opinion of the clients must be disregarded in their own interest.",
          description: "The longer I live, the more beautiful life becomes. If you foolishly ignore beauty, you will soon find yourself without it. Your life will be impoverished. But if you invest in beauty, it will remain with you all the days of your life.",
          comments: "10",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
          category:""
        },
        {
          title: "",
          blog_image: "thum5.jpg",
          post_date:"<strong>20 Feb</strong> <span> 2018</span>",
          post_author: "Admin",
          post_title: "Architects spend an entire life with this unreasonable idea that you can fight against gravity.",
          description: "The longer I live, the more beautiful life becomes. If you foolishly ignore beauty, you will soon find yourself without it. Your life will be impoverished. But if you invest in beauty, it will remain with you all the days of your life.",
          comments: "10",
          read_more_text: "Read More",
          read_more_link: "post-gallery",
          category:""
        },
    
  ];

}
