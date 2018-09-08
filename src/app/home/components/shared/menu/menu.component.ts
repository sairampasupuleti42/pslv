import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pslv-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() nav;
  nav_menu: any;
  categories:any;
  constructor() {
    
  }
  ngOnInit() {
    setTimeout(()=>{
      this.nav_menu = this.nav;
      console.log(this.nav_menu);
    },1500)
    
    
  }

}
