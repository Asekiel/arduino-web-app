import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 101,
    name: '10:30 am',
    weight: 'January 20, 2022',
    symbol: '34%',
    status: 'good',
  },
  {
    position: 102,
    name: '10:00',
    weight: 'April 05, 2022',
    symbol: '20%',
    status: 'good',
  },
];

@Component({
  selector: 'app-a-building',
  templateUrl: './a-building.component.html',
  styleUrls: ['./a-building.component.scss'],
})
export class ABuildingComponent implements AfterViewInit {
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
  constructor(private router: Router, private db: AngularFireDatabase) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // ngOnInIt(): void {
  //   const ref = this.db.list('items');

  //   ref.valueChanges().subscribe((data) => {
  //     this.data = data;
  //   })
  // }

  isBack() {
    this.router.navigate(['./school-map']);
  }

  saveData(inputValue: string) {
    const ref = this.db.list('user');

    ref
      .push(inputValue)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
