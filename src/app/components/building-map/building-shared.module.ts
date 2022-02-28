import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ABuildingComponent } from './building/a-building/a-building.component';
import { C1BuildingComponent } from './building/c1-building/c1-building.component';
import { C2BuildingComponent } from './building/c2-building/c2-building.component';
import { HBuildingComponent } from './building/h-building/h-building.component';
import { MBuildingComponent } from './building/m-building/m-building.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BuildingSharedRoutingModule } from './building-shared.routing.module';



@NgModule({
  declarations: [
    ABuildingComponent,
    C1BuildingComponent,
    C2BuildingComponent,
    HBuildingComponent,
    MBuildingComponent
    
  ],
  imports: [
    CommonModule,
    BuildingSharedRoutingModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class BuildingSharedModule { }
