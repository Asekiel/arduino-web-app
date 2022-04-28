import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebasedataService {
  items: Observable<any[]>;

  item: Observable<any>;
  records: Observable<any>;
  waterLevel;
  iaq;
  ts;
  constructor(private db: AngularFireDatabase, private afs: AngularFirestore) {
    const listRef = db.list('items');
    const shirtsRef = db.list<any>('shirts');
    this.items = db.list('items').valueChanges();
  }

  getObjects() {
    this.item = this.db.object('nodeMCU').valueChanges();
    return this.item.subscribe((object) => {
      this.waterLevel = object.waterLevel;
      this.ts = object.lastDisinfect;
      this.iaq = object.IAQ;
    });
  }

  getAirQuality() {
    return this.db.database.ref('nodeMCU').child('IAQ');
  }

  onChange() {
    const waterLevel = this.waterLevel;
    const ts = this.ts;
    const airQuality = this.iaq;

    const classroomRef: AngularFirestoreCollection<any> =
      this.afs.collection<any>('records');
    const data = {
      waterLevel: waterLevel,
      ts: ts,
      airQuality: airQuality,
    };
    classroomRef.add(data);
  }
}
