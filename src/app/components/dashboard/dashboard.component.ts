import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

import firebase from 'firebase/compat/app';
import { FirebasedataService } from 'src/app/shared/firebasedata.service';
import { MatDialog } from '@angular/material/dialog';
import { RoverDetailsComponent } from './rover-details/rover-details.component';
import { RoomsComponent } from './rover-details/rooms/rooms.component';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 'Room 301',
    name: '10:30 am',
    weight: 'January 20, 2022',
    symbol: '34%',
    status: 'good',
  }
];

export interface Rover {
  room: string;
  disinfectionTime: Date;
  date: firebase.firestore.FieldValue;
  airQuality: string;
  batteryStatus: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  items: Observable<any[]>;
  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'status',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  data: any = [];

  roverCollection: AngularFirestoreCollection<Rover>;
  rover: Observable<Rover[]>;

  airQuality: any;
  status: any;

  title = "Rover Application";

  chartOptions: {};
  constructor(
    private db: AngularFireDatabase,
    private afs: AngularFirestore,
    public fbService: FirebasedataService,
    private dialog: MatDialog,
    private router : Router
  ) {
    this.items = this.db.list('items').valueChanges();

    // this.roverCollection = this.afs.collection('rover');
    // this.rover = this.roverCollection.valueChanges();
  }

  ngOnInit() {
    this.fbService.getObjects(); // Contains all the meta data from NODEMCU
    this.fbService.item

    this.fbService.getAirQuality().on('value', (snapshot) => {
      console.log(snapshot.val());
      this.embed(snapshot.val());
    })

    console.log(this.onChange());
    
   if(this.airQuality >= 0 && this.airQuality <= 12) {
      this.status = 'Acceptable/Good';
    } else if(this.fbService.iaq >= 13 && this.airQuality <= 35.4) {
      this.status = 'Moderate';
    } else if(this.airQuality >= 35.5 && this.airQuality <= 150.4) {
      this.status = 'Unhealthy for Sensitive Group';
    } else if(this.airQuality >= 150.5 && this.airQuality <= 250.4) {
      this.status = 'Very Unhealthy';
    } else {
      this.status = 'Hazardous';
    }
  }

  goToDetails() {
    this.dialog.open(RoverDetailsComponent, {
      width: '50rem',
    });
  }

  onChange() {
    return this.fbService.onChange();
  }

  embed(air : any){
    this.airQuality = air;
  }

  toSeeRooms() {
    this.dialog.open(RoomsComponent, {
      width: '50rem'
    })
  }


}
