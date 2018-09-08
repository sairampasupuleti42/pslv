import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'pslv-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(
    private homeSvc: HomeService,
    private router: Router,
    private ref: ChangeDetectorRef) {
    ref.detach();
    setInterval(() => { this.ref.detectChanges(); }, 2000);
  }
  article_post: any;
  side_posts: any;
  post: any;
  breaking_posts: any;
  comments:any;
  ngOnInit() {
    this.getArticle()
    this.getBreakingNews();
    this.comments=[{
      
    }];
  }
  getBreakingNews() {
    this.homeSvc.getData('posts').pipe(first()).subscribe((response: any) => {
      this.breaking_posts = response.posts;
    });
  }
  getArticle() {
    this.article_post = this.homeSvc.getHomeArticle();
    this.homeSvc.getData('posts/' + this.router.url.split('/')[2])
      .pipe(first())
      .subscribe((response: any) => {
        this.post = response.post;
      });
    this.side_posts = this.homeSvc.getSidePosts();
  }

}
