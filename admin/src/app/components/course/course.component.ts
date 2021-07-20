import { Component, OnInit } from '@angular/core';
import {moveItemInArray, CdkDragDrop} from '@angular/cdk/drag-drop';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service'
import { cloneDeep } from 'lodash-es';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})

export class CourseComponent implements OnInit {

  apiUrl = environment.apiUrl;  // use symbolic link in production
  course: Course[] = [];
  displayedColumns: string[] = [
    'id','type','title','subtitle','content','subcontent','prerequisite','semester_button'
  ];

  constructor(private cs: CourseService) { }

  ngOnInit(): void {
    this.cs.getAll().subscribe(course => {
      this.course = course.sort((a, b) => a.id - b.id);
    });
  }

  onDrop(event: CdkDragDrop<Course[]>): void {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    this.course.forEach((m, i) => {
      m.updated = m.id !== i + 1;
      m.id = i + 1;
    });
    this.course = cloneDeep(this.course); // refresh table
 
  }
}
