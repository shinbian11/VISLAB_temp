import { Component, Input, OnInit } from '@angular/core';
import { ICourse } from '../../shared/models/course';
import { CourseService } from 'src/app/shared/services/course.service';
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  @Input() courseList : ICourse[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
