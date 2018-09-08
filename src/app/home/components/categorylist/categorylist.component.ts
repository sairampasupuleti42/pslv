import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'pslv-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {

  constructor(private  homeSvc: HomeService) { }
  category_posts: any;

  ngOnInit() {
    this.getCategoryPosts()
  }
  getCategoryPosts(){
    this.category_posts = this.homeSvc.getCategoryPosts();
  }
}
