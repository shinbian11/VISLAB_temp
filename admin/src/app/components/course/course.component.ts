import { Component, OnInit } from '@angular/core';
import {moveItemInArray, CdkDragDrop} from '@angular/cdk/drag-drop';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service'
import { cloneDeep } from 'lodash-es';
import {environment} from '../../../environments/environment';
import { NgbModal,NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { SurveyComponent } from '../survey/survey.component';

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

  MODALS : {[page: string]: any} = {
    course : SurveyComponent
  }

  constructor(private cs: CourseService, private modalService : NgbModal) { }

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

  onSurvey(page : string) : void {
    const modalRef = this.modalService.open(this.MODALS[page]);
    modalRef.componentInstance.renderPage = page; //이렇게 하면 page가 SurveyComponent에 전달됨!
  }

}
