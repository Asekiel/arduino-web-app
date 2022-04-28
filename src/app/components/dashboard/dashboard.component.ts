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

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 'Building A',
    name: '10:30 am',
    weight: 'January 20, 2022',
    symbol: '34%',
    status: 'good',
  },
  // {
  //   position: 'Building B',
  //   name: '10:00',
  //   weight: 'April 05, 2022',
  //   symbol: '20%',
  //   status: 'good',
  // },
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

  chartOptions: {};
  constructor(
    private db: AngularFireDatabase,
    private afs: AngularFirestore,
    public fbService: FirebasedataService,
    private dialog: MatDialog
  ) {
    this.items = this.db.list('items').valueChanges();

    // this.roverCollection = this.afs.collection('rover');
    // this.rover = this.roverCollection.valueChanges();
  }

  ngOnInit() {
    this.fbService.getObjects();
    this.fbService.item;
  }

  goToDetails() {
    this.dialog.open(RoverDetailsComponent, {
      width: '50rem',
    });
  }

  onChange() {
    return this.fbService.onChange();
  }
}
