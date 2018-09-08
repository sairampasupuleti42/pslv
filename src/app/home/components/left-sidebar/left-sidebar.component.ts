import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'pslv-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {

  constructor(private homeSvc: HomeService) { }
  side_posts: any;


  ngOnInit() {
    this.getSidePosts();
   
  }
  getSidePosts(){
    this.homeSvc.getData('posts')
    .pipe(first())
    .subscribe((response:any)=>{
      this.side_posts=response.posts;  

    });
    
  }


}
