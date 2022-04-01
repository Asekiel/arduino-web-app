import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';

import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
  AngularFireAuthGuard
} from '@angular/fire/compat/auth-guard'
import { LandingComponent } from './components/landing/landing.component';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SchoolMapComponent } from './components/building-map/school-map/school-map.component';
import { ABuildingComponent } from './components/building-map/building/a-building/a-building.component';
import { C1BuildingComponent } from './components/building-map/building/c1-building/c1-building.component';
import { C2BuildingComponent } from './components/building-map/building/c2-building/c2-building.component';
import { HBuildingComponent } from './components/building-map/building/h-building/h-building.component';
import { MBuildingComponent } from './components/building-map/building/m-building/m-building.component';
import { MatTableModule } from '@angular/material/table';
import { TestingComponent } from './components/testing/testing.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);
const routes: Routes = [
  {
    path : '',
    pathMatch : 'full',
    component : LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomepageComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
     children : [
      {
        path : 'dashboard',
        component : DashboardComponent
      },
      {
        path : 'school-map',
        loadChildren : () => import('./components/building-map/building-shared.module')
                              .then(m=>m.BuildingSharedModule),
      },
      {
        path : '',
        pathMatch : 'full',
        redirectTo : 'school-map'
      },
      // {
      //   path : 'testing',
      //   component : TestingComponent
      // }
    ]
  },
  // {
  //   path : 'sidebar',
  //   component: SidebarComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            MatTableModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
