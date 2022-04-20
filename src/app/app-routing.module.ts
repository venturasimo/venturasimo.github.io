import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';
import { Home4Component } from './home4/home4.component';
import { About1Component } from './pages/about1/about1.component';
import { Contact1Component } from './pages/contact1/contact1.component';
import { NewsGridComponent } from './blog/news-grid/news-grid.component';
import { NewsListingComponent } from './blog/news-listing/news-listing.component';
import { NewsMasonryComponent } from './blog/news-masonry/news-masonry.component';
import { WorkGridComponent } from './pages/work-grid/work-grid.component';
import { WorkMasonryComponent } from './pages/work-masonry/work-masonry.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { PostGalleryComponent } from './blog/post-gallery/post-gallery.component';
import { PostRightSidebarComponent } from './blog/post-right-sidebar/post-right-sidebar.component';
import { AllElementsComponent } from './pages/all-elements/all-elements.component';

const routes: Routes = [
                {path: '', component: Home1Component},
                {path: 'index', component: Home1Component},
                {path: 'index1', component: Home1Component},
                {path: 'index-1', component: Home1Component},
                {path: 'home', component: Home1Component},
                {path: 'home1', component: Home1Component},
                {path: 'home-1', component: Home1Component},
                {path: 'home-1', component: Home1Component},
                {path: 'index-2', component: Home2Component},
                {path: 'home-2', component: Home2Component},
                {path: 'index-3', component: Home3Component},
                {path: 'home-3', component: Home3Component},
                {path: 'index-4', component: Home4Component},
                {path: 'home-4', component: Home4Component},
                {path: 'home-4', component: Home4Component},
                {path: 'about-1', component: About1Component},
                {path: 'contactar', component: Contact1Component},
                {path: 'news-grid', component: NewsGridComponent},
                {path: 'news-listing', component: NewsListingComponent},
                {path: 'news-masonry', component: NewsMasonryComponent},
                {path: 'work-grid', component: WorkGridComponent},
                {path: 'work-masonry', component: WorkMasonryComponent},
                {path: 'project-detail', component: ProjectDetailComponent},
                {path: 'post-gallery', component: PostGalleryComponent},
                {path: 'post-right-sidebar', component: PostRightSidebarComponent},
                {path: 'all-elements', component: AllElementsComponent},
                
                
                
              ];


@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
