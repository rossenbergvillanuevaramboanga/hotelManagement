import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoomComponent } from './list-room/list-room.component';
import {RouterModule, Routes} from "@angular/router";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MaterialModule} from "../../shared/material/material.module";
import {ReactiveFormsModule} from "@angular/forms";


const routes: Routes = [
  {
    path: 'list',
    component: ListRoomComponent
  }
]
@NgModule({
  declarations: [
    ListRoomComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class RoomModule { }
