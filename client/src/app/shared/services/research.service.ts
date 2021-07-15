import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { IResponse } from '../models/response';
import { IResearch } from '../models/research';

@Injectable({
  providedIn: 'root'
})
export class ResearchService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IResearch[]> {

    return this.http.get<IResponse>(`${environment.apiUrl}/research/r/all`)
      .pipe( map(res => res.data) );
  }
}