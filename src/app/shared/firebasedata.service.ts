import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebasedataService {
  items: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
    const listRef = db.list('items');
    const shirtsRef = db.list<any>('shirts');
    this.items = db.list('items').valueChanges();
  }
}
