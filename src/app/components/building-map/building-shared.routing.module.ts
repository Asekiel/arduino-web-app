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
      component : SchoolMapComponent,
      // children : [
      //     {
      //       path : 'a-building',
      //       component : ABuildingComponent
      //     },
      //     {
      //       path : 'c1-building',
      //       component : C1BuildingComponent
      //     },
      //     {
      //       path : 'c2-building',
      //       component : C2BuildingComponent
      //     },
      //     {
      //       path : 'm-building',
      //       component : MBuildingComponent
      //     },
      //     {
      //       path : 'h-building',
      //       component : HBuildingComponent
      //     }
      // ]
    },
    {
      path : 'a-building',
      component : ABuildingComponent
    },
    {
      path : 'c1-building',
      component : C1BuildingComponent
    },
    {
      path : 'c2-building',
      component : C2BuildingComponent
    },
    {
      path : 'm-building',
      component : MBuildingComponent
    },
    {
      path : 'h-building',
      component : HBuildingComponent
    },
  ];

  @NgModule({
     imports : [RouterModule.forChild(routes)],
     exports : [RouterModule]
  })

  export class BuildingSharedRoutingModule  { }