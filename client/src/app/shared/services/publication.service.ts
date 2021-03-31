import { Injectable } from '@angular/core';
import {IPublication} from '../models/publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  data: IPublication[] = [
  ];

  constructor() { }

  getData(): IPublication[] {
    return this.data;
  }
}
