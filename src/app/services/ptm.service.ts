import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OverviewModel } from '../models/overview.model';

@Injectable({
  providedIn: 'root'
})
export class PtmService {

  url_overview = environment.url_server + "overview/";

  constructor(
    private http: HttpClient
  ) { }

  getAllOverviewItems(overviewHash: string): Observable<OverviewModel> {
    return this.http.get<OverviewModel>(this.url_overview + overviewHash);
  }
}
