import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { IResponse } from '../models/response';
import { ICourse } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ICourse[]> {
    return this.http.get<IResponse>(`${environment.apiUrl}/courses/r/all`)
      .pipe( map(res => res.data) );
  }
}

