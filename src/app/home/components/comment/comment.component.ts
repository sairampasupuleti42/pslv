import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pslv-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comments:any;
  show:boolean;
  constructor() { }

  ngOnInit() {
    console.log(this.comments);
  }

}
