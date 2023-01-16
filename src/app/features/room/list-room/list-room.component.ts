import {Component, ViewChild} from '@angular/core';
import {RoomService} from "../../../services/room.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";
import {Room} from "../../../models/Room";
import { MatPaginator } from '@angular/material/paginator';
import {MatDatepicker} from "@angular/material/datepicker";
import {RangeDate} from "../../../models/RangeDate";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.css']
})
export class ListRoomComponent {
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor(private roomService: RoomService, private router: Router,  private route: ActivatedRoute) {}
  dataSource: MatTableDataSource<Room> = new MatTableDataSource<Room>();
  displayedColumns: string[] = ['id', 'name', 'idReservation'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  search() {

    var rangeDate: RangeDate;
    rangeDate = {
      datainizio: this.range.get('start')?.getRawValue().toLocaleDateString("en-GB"),
      datafine:this.range.get('end')?.getRawValue().toLocaleDateString("en-GB")
    };

    this.roomService.searchRoom(rangeDate).subscribe(
      res => {
        this.dataSource.data = res;
      }
    );
  }
}
