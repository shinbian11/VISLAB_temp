import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { IResponse } from '../models/response';
import { IMember } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IMember[]> {
    return this.http.get(`${environment.apiUrl}/members/r/all`)
      .pipe( map(res => res.data) );
  }
}
