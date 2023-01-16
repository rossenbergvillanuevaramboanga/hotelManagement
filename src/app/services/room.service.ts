import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Room} from "../models/Room";
import {Observable} from "rxjs";
import {RangeDate} from "../models/RangeDate";

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiServer = 'http://localhost:8080/api/room';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getPizze(): Observable<Room[]> {
    return this.http.get<Room[]>(this.apiServer)
  }

  searchRoom(date: RangeDate): Observable<Room[]>{
    return  this.http.post<Room[]>(this.apiServer + "/search",date,this.httpOptions)

  }
}
