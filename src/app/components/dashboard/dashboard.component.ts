import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  items: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.items = this.db.list('items').valueChanges();
  }

  ngOnInit(): void {}
}
