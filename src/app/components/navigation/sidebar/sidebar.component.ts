import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

declare const $: any;

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

// export const ROUTES: RouteInfo[] = [
//   { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
//   { path: '/A-BUILDING', title: 'A-Building',  icon:'person', class: '' },
//   { path: '/C1-BUILDING', title: 'C1-Building',  icon:'content_paste', class: '' },
//   { path: '/C2-BUILDING', title: 'C2-Building',  icon:'library_books', class: '' },
//   { path: '/H1-BUILDING', title: 'H1-Building',  icon:'bubble_chart', class: '' },
//   { path: '/M-BUILDING', title: 'M-Building',  icon:'location_on', class: '' }
// ];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})



export class SidebarComponent implements OnInit {


  menuItems: any[];

  constructor( private router : Router, private auth : AuthService) { 
    // this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  ngOnInit(): void {
  }

  isSchoolMap() {
    this.router.navigate(['school-map'])
  }

  isLogOut() {
    this.auth.logOut();
  }

}
