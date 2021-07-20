import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Response } from '../models/response';
import { Publication } from '../models/publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Publication[]> {
    return this.http.get<Response>(`${environment.apiUrl}/publications/r/all`)
      .pipe( map(res => res.data) );
  }
}
