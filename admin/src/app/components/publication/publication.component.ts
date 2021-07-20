import { Component, OnInit } from '@angular/core';
import {moveItemInArray, CdkDragDrop} from '@angular/cdk/drag-drop';
import { Publication } from '../../models/publication';
import { PublicationService } from '../../services/publication.service';
import { cloneDeep } from 'lodash-es';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})

export class PublicationComponent implements OnInit {

  apiUrl = environment.apiUrl;  // use symbolic link in production
  publications: Publication[] = [];
  displayedColumns: string[] = [
    'id','title','venue','type','conference_prefix','published_in','published_url','volume','no','pages','year','conference_info','postfix','status','rank'
  ];

  constructor(private ps: PublicationService ) { }

  ngOnInit(): void {
    this.ps.getAll().subscribe(publications => {
      this.publications = publications.sort((a, b) => a.id - b.id);
    });
  }

  onDrop(event: CdkDragDrop<Publication[]>): void {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    this.publications.forEach((m, i) => {
      m.updated = m.id !== i + 1;
      m.id = i + 1;
    });
    this.publications = cloneDeep(this.publications); // refresh table

  }
}

