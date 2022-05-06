import { Component, OnInit } from '@angular/core';
import { dummyCourses, myCoursesIds } from '../models/dummy';
import { Course } from '../models/course';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.css'],
})
export class CourseOverviewComponent implements OnInit {
  courses: Course[] = dummyCourses;
  showAddCourse = false;

  newCourse = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    link: new FormControl(''),
    number_students: new FormControl(''),
    description: new FormControl(''),
    time_slot: new FormControl(''),
  });

  isShow = false;

  constructor() {}

  ngOnInit(): void {}

  showFormCourse() {
    this.showAddCourse = !this.showAddCourse;
  }
}
