import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { CountToModule } from 'angular-count-to';  // Counter Module



import { Home1Component } from './home1/home1.component';
import { Header1Component } from './elements/header/header1/header1.component';
import { Slider1Component } from './elements/rev-slider/slider1/slider1.component';
import { IconBox1Component } from './elements/icon-box/icon-box1/icon-box1.component';
import { OurWork1Component } from './elements/our-work/our-work1/our-work1.component';
import { Specialization1Component } from './elements/specialization/specialization1/specialization1.component';
import { OurTeam1Component } from './elements/our-team/our-team1/our-team1.component';
import { ClientsComponent } from './elements/clients/clients.component';
import { Testimonial1Component } from './elements/testimonial/testimonial1/testimonial1.component';
import { Blog1Component } from './elements/blog/blog1/blog1.component';
import { Footer1Component } from './elements/footer/footer1/footer1.component';
import { ScrollToTopComponent } from './elements/scroll-to-top/scroll-to-top.component';
import { NavLinksComponent } from './elements/nav-links/nav-links.component';
import { LoadingComponent } from './elements/loading/loading.component';

import { Home2Component } from './home2/home2.component';
import { Counter1Component } from './elements/counter/counter1/counter1.component';
import { OurWork2Component } from './elements/our-work/our-work2/our-work2.component';
import { CallToAction1Component } from './elements/call-to-action/call-to-action1/call-to-action1.component';
import { Specialization2Component } from './elements/specialization/specialization2/specialization2.component';
import { Gallery1Component } from './elements/gallery/gallery1/gallery1.component';
import { Header2Component } from './elements/header/header2/header2.component';
import { Slider2Component } from './elements/rev-slider/slider2/slider2.component';

import { Home3Component } from './home3/home3.component';
import { Header3Component } from './elements/header/header3/header3.component';
import { Slider3Component } from './elements/rev-slider/slider3/slider3.component';
import { IconBox2Component } from './elements/icon-box/icon-box2/icon-box2.component';
import { Specialization3Component } from './elements/specialization/specialization3/specialization3.component';
import { OurWork3Component } from './elements/our-work/our-work3/our-work3.component';
import { OurTeam2Component } from './elements/our-team/our-team2/our-team2.component';

import { Home4Component } from './home4/home4.component';
import { Slider4Component } from './elements/rev-slider/slider4/slider4.component';
import { IconBox3Component } from './elements/icon-box/icon-box3/icon-box3.component';

import { About1Component } from './pages/about1/about1.component';
import { Banner1Component } from './elements/banners/banner1/banner1.component';
import { IconBox4Component } from './elements/icon-box/icon-box4/icon-box4.component';
import { Specialization4Component } from './elements/specialization/specialization4/specialization4.component';

import { Contact1Component } from './pages/contact1/contact1.component';
import { NewsGridComponent } from './blog/news-grid/news-grid.component';
import { NewsListingComponent } from './blog/news-listing/news-listing.component';
import { NewsMasonryComponent } from './blog/news-masonry/news-masonry.component';
import { WorkGridComponent } from './pages/work-grid/work-grid.component';
import { WorkMasonryComponent } from './pages/work-masonry/work-masonry.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';

import { PostGalleryComponent } from './blog/post-gallery/post-gallery.component';
import { CommentsComponent } from './elements/widgets/comments/comments.component';
import { CommentFormComponent } from './elements/forms/comment-form/comment-form.component';

import { PostRightSidebarComponent } from './blog/post-right-sidebar/post-right-sidebar.component';
import { SearchComponent } from './elements/widgets/search/search.component';
import { RecentPostComponent } from './elements/widgets/recent-post/recent-post.component';
import { CategoriesComponent } from './elements/widgets/categories/categories.component';
import { OurGalleryComponent } from './elements/widgets/our-gallery/our-gallery.component';
import { TagComponent } from './elements/widgets/tag/tag.component';
import { AllElementsComponent } from './pages/all-elements/all-elements.component';
import {NgcCookieConsentModule} from 'ngx-cookieconsent';



@NgModule({
  declarations: [
    AppComponent,
    Home1Component,
    Header1Component,
    Slider1Component,
    IconBox1Component,
    OurWork1Component,
    Specialization1Component,
    OurTeam1Component,
    ClientsComponent,
    Testimonial1Component,
    Blog1Component,
    Footer1Component,
    ScrollToTopComponent,
    NavLinksComponent,
    LoadingComponent,
    
    Home2Component,
    Header2Component,
    Slider2Component,
    Gallery1Component,
    Specialization2Component,
    OurWork2Component,
    CallToAction1Component,
    Counter1Component,
    
    Home3Component,
    Header3Component,
    Slider3Component,
    IconBox2Component,
    Specialization3Component,
    OurWork3Component,
    OurTeam2Component,
    
    Home4Component,
    Slider4Component,
    IconBox3Component,
    
    About1Component,
    Banner1Component,
    IconBox4Component,
    Specialization4Component,
    
    Contact1Component,
    NewsGridComponent,
    NewsListingComponent,
    NewsMasonryComponent,
    WorkGridComponent,
    WorkMasonryComponent,
    ProjectDetailComponent,

    PostGalleryComponent,
    CommentsComponent,
    CommentFormComponent,
    
    PostRightSidebarComponent,
    SearchComponent,
    RecentPostComponent,
    CategoriesComponent,
    OurGalleryComponent,
    TagComponent,
    AllElementsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    CountToModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      },
      defaultLanguage: 'ca'
    }),
    NgcCookieConsentModule.forRoot({
      cookie: {
        domain: 'localhost' // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
      },
      palette: {
        popup: {
          background: '#000'
        },
        button: {
          background: '#f1d600'
        }
      },
      theme: 'edgeless',
      type: 'opt-out'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
