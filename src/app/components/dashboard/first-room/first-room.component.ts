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
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 'Room 301',
    name: '10:30 am',
    weight: 'January 20, 2022',
    symbol: 13,
    status: 'good',
  },
  {
    position: 'Room 301',
    name: '10:30 am',
    weight: 'January 20, 2022',
    symbol: 12,
    status: 'good',
  },
  {
    position: 'Room 301',
    name: '10:30 am',
    weight: 'January 20, 2022',
    symbol: 14,
    status: 'good',
  },
  {
    position: 'Room 301',
    name: '10:30 am',
    weight: 'January 20, 2022',
    symbol: 14,
    status: 'good',
  },
  {
    position: 'Room 301',
    name: '10:30 am',
    weight: 'January 20, 2022',
    symbol: 14,
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
  selector: 'app-first-room',
  templateUrl: './first-room.component.html',
  styleUrls: ['./first-room.component.scss'],
})
export class FirstRoomComponent implements OnInit {
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

  records : Observable<any>;
  rec
  chartOptions: {};

  waterLevel;
  iaq;
  ts;

  constructor(
    private db: AngularFireDatabase,
    private afs: AngularFirestore,
    public fbService: FirebasedataService,
    private dialog: MatDialog,
    private router : Router
  ) {
    this.items = this.db.list('items').valueChanges();
  }

  ngOnInit() {
    // this.fbService.getObjects();
    // this.fbService.item;
  

    // WORKING FOR NOW
    this.records = this.db.object('records').valueChanges();
    
  }

  getRecordsObjects() {
    const waterLevel = this.waterLevel;
    const ts = this.ts;
    const airQuality = this.iaq;

    this.rec = this.db.object('records').set({
      waterLevel : this.waterLevel,
      ts : this.ts,
      airQuality : this.iaq,
    });
  }





}
