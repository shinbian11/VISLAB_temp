import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../shared/models/course';
import { CourseService } from '../../shared/services/course.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})

export class CourseComponent implements OnInit {

  apiUrl = environment.apiUrl;  // use symbolic link in production
  courses: ICourse[] = [];
  Courses: ICourse[][] = [];
  course_list = ["Undergraduate",'Graduate'];

  constructor(private cs: CourseService) { }

  ngOnInit(): void {

    this.cs.getAll().subscribe(courses => {
       this.courses = courses.sort((a, b) => a.id - b.id);
       this.Courses = this.course_list.map(element => this.courses.filter(a => a.type === element));
    });

  }
}
