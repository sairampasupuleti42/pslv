import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ArticleComponent } from './components/article/article.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { CategorylistComponent } from './components/categorylist/categorylist.component';
import { CommentComponent } from './components/comment/comment.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/shared/menu/menu.component';
import { LanguageComponent } from './components/language/language.component';
import { EscapeHtmlPipe  } from './pipes/keep-html.pipe';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    HomeComponent, HeaderComponent, FooterComponent, ArticleComponent, 
    LeftSidebarComponent, CategorylistComponent, CommentComponent,
     MenuComponent, LanguageComponent, EscapeHtmlPipe ]
})
export class HomeModule { }
