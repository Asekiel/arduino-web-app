import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';

// Material Design
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LandingComponent } from './components/landing/landing.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { HighchartsChartModule } from 'highcharts-angular';
import { SchoolMapComponent } from './components/building-map/school-map/school-map.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FirstChartComponent } from './components/widgets/first-chart/first-chart.component';
import { SecondChartComponent } from './components/widgets/second-chart/second-chart.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse'
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { TestingComponent } from './components/testing/testing.component';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { CoreModule } from './shared/core.module';


const firebase = {
  apiKey: "AIzaSyCG5hENCtCmJH8QIK5LD9XcqLfWNqtIJ7Y",
  authDomain: "iot-roverweb-app.firebaseapp.com",
  projectId: "iot-roverweb-app",
  storageBucket: "iot-roverweb-app.appspot.com",
  messagingSenderId: "178681911817",
  appId: "1:178681911817:web:445e224157b1a51eb276d8",
  measurementId: "G-NGGEMVBRGN"
}

// const data = initializeApp(environment.firebase)
// const database = getDatabase(data);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    LandingComponent,
    SidebarComponent,
    NavbarComponent,
    SchoolMapComponent,
    DashboardComponent,
    FirstChartComponent,
    SecondChartComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    AppRoutingModule,
    HotToastModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireMessagingModule,
    MatTableModule,
    MatSidenavModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MatMenuModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    CoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function provideFirestore(arg0: () => any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

