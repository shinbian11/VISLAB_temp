import { Component, OnInit } from '@angular/core';
import {moveItemInArray, CdkDragDrop} from '@angular/cdk/drag-drop';
import { Research } from '../../models/research';
import { ResearchService } from '../../services/research.service'
import { cloneDeep } from 'lodash-es';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

  apiUrl = environment.apiUrl;  // use symbolic link in production
  research: Research[] = [];
  displayedColumns: string[] = [
    'id','title','year','month','obliquedesc','members'
  ];

  constructor(private rs: ResearchService) { }

  ngOnInit(): void {
    this.rs.getAll().subscribe(research => {
      this.research = research.sort((a, b) => a.id - b.id);
    });
  }

  onDrop(event: CdkDragDrop<Research[]>): void {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    this.research.forEach((m, i) => {
      m.updated = m.id !== i + 1;
      m.id = i + 1;
    });
    this.research = cloneDeep(this.research); // refresh table
    // TODO: update index in database for each updated member
  }
}
