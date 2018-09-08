import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'pslv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories: any;
  languages: any;
  posts: any;
  constructor(private httpSvc: CategoryService, private router: Router) { }
  currentLink: any;
  ngOnInit() {
    this.currentLink = this.router.url.split('/')[1];
    this.getCategories(1);
    this.httpSvc.getData('languages').pipe(first()).subscribe((response: any) => {
      this.languages = response.languages;
    });
  }
  changeLanguage(id, url) {
    if(localStorage.getItem('locale')==''){
      localStorage.setItem('locale','1');
      this.getCategories(1);
      this.router.navigate([url])
    }else{
      this.getCategories(id);
      this.router.navigate([url])
    }
  }
  getCategories(value) {
    this.httpSvc.getData('categories/parent/' + value).pipe(first()).subscribe((response: any) => {
      let cats = response.categories;
      let spl = cats.slice(0, 7);
      this.categories = spl.map((c: any) => {
        return { name: c.name, permalink: c.permalink };
      });

    });
  }



}
