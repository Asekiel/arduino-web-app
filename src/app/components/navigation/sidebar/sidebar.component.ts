import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';
import { RoverNotificationsService } from 'src/app/shared/rover-notifications.service';

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

  users : Observable<any>;
  userData;
  user
  menuItems: any[];

  @ViewChild('MatSidenav')
  sidenav : MatSidenav
  

  constructor( private router : Router, private afs : AngularFirestore,private authService : AuthService, private routes : ActivatedRoute, private observer : BreakpointObserver, public rover : RoverNotificationsService) { 
    // this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  ngOnInit(): void {
    this.users = this.afs.collection('users').doc('fIpr6RMWQdY7kLWKS6Ri').valueChanges();
  }

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width: 800px)']).subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode ='over';
        this.sidenav.close()
      }
      else{
        this.sidenav.mode = 'side';
        this.sidenav.open()
      }
    })
  }


  isSchoolMap() {
    this.router.navigate(['school-map'])
  }

  isLogOut() {
    this.authService.logOut();
  }

}
