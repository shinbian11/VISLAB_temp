import {Component, OnInit} from '@angular/core';
import {Course} from '../../models/course';
import {CourseService} from '../../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courses: Course[];

  displayedColumns: string[] = ['title', 'type', 'description'];

  constructor(private cs: CourseService) { }

  ngOnInit(): void {
    this.cs.getAll().subscribe(courses => {
      this.courses = courses;
    });
  }
}
