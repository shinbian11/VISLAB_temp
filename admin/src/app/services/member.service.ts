import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Response } from '../models/response';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Member[]> {
    return this.http.get<Response>(`${environment.apiUrl}/members/r/all`)
      .pipe( map(res => res.data) );
  }
}
