import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebasedataService {
  items: Observable<any[]>;
  itemRef: AngularFireList<any>;
  item: Observable<any>;
  // records: Observable<any>;
  waterLevel;
  iaq;
  ts;
  air: any;
  constructor(private db: AngularFireDatabase, private afs: AngularFirestore) {
    // const listRef = db.list('items');
    // const shirtsRef = db.list<any>('shirts');
    // this.items = db.list('items').valueChanges();
  }

  getObjects() {
    this.item = this.db.object('nodeMCU').valueChanges();
    // this.item.subscribe(node => {
    //   console.log(node)
    // })
  }

  getAirQuality() {
    this.air = this.db.database.ref('nodeMCU').child('IAQ');
    return this.air;
  }

  getWaterLevel() {
    return (this.waterLevel = this.db.database
      .ref('nodeMCU')
      .child('waterLevel'));
  }

  getTS() {
    this.ts = this.db.database.ref('nodeMCU').child('lastDisinfect');
    return this.ts;
  }

  // addRecordsTOData() {
  //   this.records = this.db.object('records').valueChanges();
  //   this.records.subscribe(res => {
  //     console.log(res);
  //   })
  // }
}
