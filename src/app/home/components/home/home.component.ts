import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'pslv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lang:any;
  constructor(private homeSvc: HomeService,private router:Router) { 
  }
  home_posts: any;
  topside_posts:any;
  breaking_posts:any;
  ngOnInit() {
    this.getMainPosts();
    this.getTopSidePosts();
    this.getBreakingNews();
  }
  getMainPosts() {
    this.home_posts=this.homeSvc.getHomePosts();
  }
  getTopSidePosts(){
    this.topside_posts=this.homeSvc.getSidePosts();
  }
  getBreakingNews(){
    this.homeSvc.getData('posts').pipe(first()).subscribe((response: any) => {
      this.breaking_posts = response.posts;
    });
  }
}
