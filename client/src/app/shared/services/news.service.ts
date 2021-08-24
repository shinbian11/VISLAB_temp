import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { IResponse } from '../models/response';
import { INews } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<INews[]> {
    return this.http.get<IResponse>(`${environment.apiUrl}/events/r/all`)
      .pipe( map(res => res.data) );
  }

}
