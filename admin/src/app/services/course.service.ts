import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Course } from '../models/course';
import { map } from 'rxjs/operators';
import {Response} from '../models/response';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private auth: AuthService, private http: HttpClient) { }

  getAll(): Observable<Course[]> {
    return this.http.get<Response>(`${environment.apiUrl}/courses/r/all`)
      .pipe(
        map(res => res.data)
      );
  }
}
