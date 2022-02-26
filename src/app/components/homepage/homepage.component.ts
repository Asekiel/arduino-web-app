import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

declare const $: any;

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/A-BUILDING', title: 'A-BUILDING',  icon:'person', class: '' },
  { path: '/C1-BUILDING', title: 'C1-BUILDING',  icon:'content_paste', class: '' },
  { path: '/C2-BUILDING', title: 'C2-BUILDING',  icon:'library_books', class: '' },
  { path: '/H1-BUILDING', title: 'H1-BUILDING',  icon:'bubble_chart', class: '' },
  { path: '/M-BUILDING', title: 'M-BUILDING',  icon:'location_on', class: '' }
];

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  sideBarOpen = true;
  menuItems: any[];
  constructor( private authService : AuthService) { 
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  ngOnInit(): void {
  }

  logOutUser() {
    this.authService.logOut()
  }

}
