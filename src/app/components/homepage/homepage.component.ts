import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Users } from 'src/app/models/user';
import { AuthService } from 'src/app/shared/auth.service';
import { RoverNotificationsService } from 'src/app/shared/rover-notifications.service';
// import 'src/app/utils/rxjs.operators';
declare const $: any;

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: '/A-BUILDING', title: 'A-BUILDING', icon: 'person', class: '' },
  { path: '/C1-BUILDING', title: 'C1-BUILDING', icon: 'content_paste', class: '' },
  { path: '/C2-BUILDING', title: 'C2-BUILDING', icon: 'library_books', class: '' },
  { path: '/H1-BUILDING', title: 'H1-BUILDING', icon: 'bubble_chart', class: '' },
  { path: '/M-BUILDING', title: 'M-BUILDING', icon: 'location_on', class: '' }
];

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit, OnInit {

  show;

  @ViewChild(MatSidenav)
  sidenav: MatSidenav;
  user: Observable<any>
  constructor(public authService: AuthService, private router: ActivatedRoute, private observer: BreakpointObserver, public rover: RoverNotificationsService, private afAuth: AngularFireAuth, private afs : AngularFirestore) {
    // this.menuItems = ROUTES.filter(menuItem => menuItem);

    // this.router.params.subscribe( params =>{
    //   console.log(params)
    // })
  }

  ngOnInit() {

    this.afAuth.authState.subscribe((user) => {
      this.user = this.afs.doc<any>(`users/${user.email}`).valueChanges();
    })


    this.rover.requestPermission();
    this.rover.receiveMessage();
    this.show = this.rover.currentMessage;

  }

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close()
      }
      else {
        this.sidenav.mode = 'side';
        this.sidenav.open()
      }
    })
  }

  logOutUser() {
    this.authService.logOut()
  }

}
