import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OverviewModel } from '../models/overview.model';

@Injectable({
  providedIn: 'root'
})
export class PtmService {

  params = new HttpParams()
    .set("Access-Control-Allow-Origin", "*")
    .set("Content-Type", "Application/json");

  url_overview = environment.url_server + "overview/";

  constructor(
    private http: HttpClient
  ) { }

  getAllOverviewItems(overviewHash: string): Observable<OverviewModel> {
    return this.http.get<OverviewModel>(this.url_overview + overviewHash);
  }
}
