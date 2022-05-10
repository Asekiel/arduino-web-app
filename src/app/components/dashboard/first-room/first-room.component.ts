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

  records: Observable<any>;

  status;

  constructor(
    private db: AngularFireDatabase,

    public fbService: FirebasedataService
  ) {
    this.items = this.db.list('items').valueChanges();
  }

  ngOnInit() {
    // this.fbService.getObjects();
    // this.fbService.item;

    // WORKING FOR NOW
    this.records = this.db.list('records').valueChanges();
    this.fbService.getAirQuality().on('value', (snapshot) => {
      console.log(snapshot.val());

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
  }
}
