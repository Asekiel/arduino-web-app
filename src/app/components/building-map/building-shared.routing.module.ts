import { ABuildingComponent } from './building/a-building/a-building.component';
import { C1BuildingComponent } from './building/c1-building/c1-building.component';
import { C2BuildingComponent } from './building/c2-building/c2-building.component';
import { HBuildingComponent } from './building/h-building/h-building.component';
import { MBuildingComponent } from './building/m-building/m-building.component';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { SchoolMapComponent } from './school-map/school-map.component';



const routes: Routes = [
    {
      path : '',
      pathMatch : 'full',
      redirectTo : 'a-building'
    },
    {
        path : 'a-building',
        component : ABuildingComponent
    }
  ];

  @NgModule({
     imports : [RouterModule.forChild(routes)],
     exports : [RouterModule]
  })

  export class BuildingSharedRoutingModule  { }