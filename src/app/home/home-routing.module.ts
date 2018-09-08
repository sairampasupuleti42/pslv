import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArticleComponent } from './components/article/article.component';
import { CategorylistComponent } from './components/categorylist/categorylist.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'article/:post_slug',
    component: ArticleComponent
  },
  {
    path: ':language',
    component: HomeComponent
  },{
    path:':language/:category',
    component:CategorylistComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
