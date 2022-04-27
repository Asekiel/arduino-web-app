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
import { MatIconModule } from '@angular/material/icon';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { provideFirebaseApp } from '@angular/fire/app';
import { Database } from 'firebase/database';
import { RoverDetailsComponent } from '../dashboard/rover-details/rover-details.component';

@NgModule({
  declarations: [
    ABuildingComponent,
    C1BuildingComponent,
    C2BuildingComponent,
    HBuildingComponent,
    MBuildingComponent,
    // RoverDetailsComponent
  ],
  imports: [
    CommonModule,
    BuildingSharedRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
  ],
  exports: [
    ABuildingComponent,
    C1BuildingComponent,
    C2BuildingComponent,
    HBuildingComponent,
    MBuildingComponent,
  ],
  providers: []
})
export class BuildingSharedModule {}
