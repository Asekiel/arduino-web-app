import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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
  {
    position: 'Building B',
    name: '10:00',
    weight: 'April 05, 2022',
    symbol: '20%',
    status: 'good',
  },
];


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

  constructor(private db: AngularFireDatabase) {
    this.items = this.db.list('items').valueChanges();
  }

  ngOnInit(): void {}


}
