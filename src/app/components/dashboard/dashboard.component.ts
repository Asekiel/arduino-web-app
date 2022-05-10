import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AngularFireDatabase,
  snapshotChanges,
} from '@angular/fire/compat/database';
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
  },
];

export interface Rover {
  // room: string;
  disinfectionTime: Date;
  // date: firebase.firestore.FieldValue;
  airQuality: string;
  iaqStatus: string;
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
  roverCollection: AngularFirestoreCollection<any>;
  rover: Observable<any[]>;
  records: Observable<any>;
  airQuality: any;
  status: any;
  public lastDisinfect: any;
  title = 'Rover Application';
  chartOptions: {};
  constructor(
    private db: AngularFireDatabase,
    public fbService: FirebasedataService,
    private dialog: MatDialog
  ) {
    this.items = this.db.list('nodeMCU').valueChanges();

    this.records = this.db.list('records').valueChanges();
  }

  ngOnInit() {
    this.fbService.getObjects(); // Contains all the meta data from NODEMCU
    this.fbService.item;

    this.fbService.getAirQuality().on('value', (snapshot) => {
      console.log(snapshot.val());
      this.embed(snapshot.val());
      if (snapshot.val() >= 0 && snapshot.val() <= 12) {
        this.status = 'Acceptable/Good';
      } else if (snapshot.val() >= 13 && snapshot.val() <= 35.4) {
        this.status = 'Moderate';
      } else if (snapshot.val() >= 35.5 && snapshot.val() <= 150.4) {
        this.status = 'Unhealthy for Sensitive Group';
      } else if (snapshot.val() >= 150.5 && snapshot.val() <= 250.4) {
        this.status = 'Very Unhealthy';
      } else {
        this.status = 'Hazardous';
      }
      console.log(this.status);
    });

    this.fbService.getTS().on('value', (snapshot) => {
      this.embedTS(snapshot.val());
      this.onChange();
    });
  }

  goToDetails() {
    this.dialog.open(RoverDetailsComponent, {
      width: '50rem',
    });
  }

  onChange() {
    const recordRef = this.db.list('records');
    {
      recordRef.push({
        disinfectionTime: Date.now(),
        airQuality: this.airQuality,
        iaqStatus: this.status,
      });
    }
  }

  embed(air: any) {
    this.airQuality = air;
  }

  embedTS(ts: any) {
    this.lastDisinfect = ts;
  }

  toSeeRooms() {
    this.dialog.open(RoomsComponent, {
      width: '50rem',
    });
  }
}
