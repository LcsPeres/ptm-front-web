import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  params = new HttpParams()
    .set("Access-Control-Allow-Origin", "*")
    .set("Content-Type", "Application/json");

  url_overview = environment.url_server + "task/transfer/";

  constructor(
    private http: HttpClient
  ) { }

  transferTaskToColumn(idTask: number, toColumn: number): Observable<any> {
    console.log('toColumn: ' + toColumn)
    return this.http.get<any>(this.url_overview + idTask + '/' + toColumn);
  }
}
