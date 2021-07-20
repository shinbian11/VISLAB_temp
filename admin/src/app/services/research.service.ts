import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Response } from '../models/response';
import { Research } from '../models/research';

@Injectable({
  providedIn: 'root'
})
export class ResearchService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Research[]> {

    return this.http.get<Response>(`${environment.apiUrl}/research/r/all`)
      .pipe( map(res => res.data) );
  }
}
