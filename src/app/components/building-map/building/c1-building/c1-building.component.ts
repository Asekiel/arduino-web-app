import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { getDatabase, ref, onValue, Database} from "firebase/database";
import { Observable } from "rxjs";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  status : string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 101, name: '10:30 am', weight: 'January 20, 2022', symbol: '34%', status : 'good'},
  {position: 2, name: 'Helium', weight: '4.0026', symbol: 'He', status : 'good'},
  {position: 3, name: 'Lithium', weight: '6.941', symbol: 'Li', status : 'good'},
  {position: 4, name: 'Beryllium', weight: '9.0122', symbol: 'Be', status : 'good'},
  {position: 5, name: 'Boron', weight: '10.811', symbol: 'B', status : 'good'},
  {position: 6, name: 'Carbon', weight: '12.0107', symbol: 'C', status : 'good'},
  {position: 7, name: 'Nitrogen', weight: '14.0067', symbol: 'N', status : 'good'},
  {position: 8, name: 'Oxygen', weight: '15.9994', symbol: 'O', status : 'good'},
  {position: 9, name: 'Fluorine', weight: '18.9984', symbol: 'F', status : 'good'},
  {position: 10, name: 'Neon', weight: '20.1797', symbol: 'Ne', status : 'good'},
  {position: 11, name: 'Sodium', weight: '22.9897', symbol: 'Na', status : 'good'},
  {position: 12, name: 'Magnesium', weight: '24.305', symbol: 'Mg', status : 'good'},
  {position: 13, name: 'Aluminum', weight: '26.9815', symbol: 'Al', status : 'good'},
  {position: 14, name: 'Silicon', weight: '28.0855', symbol: 'Si', status : 'good'},
  {position: 15, name: 'Phosphorus', weight: '30.9738', symbol: 'P', status : 'good'},
  {position: 16, name: 'Sulfur', weight: '32.065', symbol: 'S', status : 'good'},
  {position: 17, name: 'Chlorine', weight: '35.453', symbol: 'Cl', status : 'good'},
  {position: 18, name: 'Argon', weight: '39.948', symbol: 'Ar', status : 'good'},
  {position: 19, name: 'Potassium', weight: '39.0983', symbol: 'K', status : 'good'},
  {position: 20, name: 'Calcium', weight: '40.078', symbol: 'Ca', status : 'good'},
];
@Component({
  selector: 'app-c1-building',
  templateUrl: './c1-building.component.html',
  styleUrls: ['./c1-building.component.scss']
})
export class C1BuildingComponent implements AfterViewInit  {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  tables : Observable<any>;
  constructor() {
    // this.tables = db.object('tables').valueChanges();
    
    console.log(this.tables);
   }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  // readData(value : any) {
  //   const starCountRef = ref(this.database, 'tables/' +  value.batteryLevel);
  //   onValue(starCountRef, (snapshot) => {
  //   const data = snapshot.val();
    
  //   console.log(data.batteryLevel)
  //   });
  // }

}
