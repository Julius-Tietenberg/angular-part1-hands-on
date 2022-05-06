import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { dummyCourses, myCoursesIds } from '../models/dummy';

@Component({
  selector: 'app-course-dashboard',
  templateUrl: './course-dashboard.component.html',
  styleUrls: ['./course-dashboard.component.css'],
})
export class CourseDashboardComponent implements OnInit {
  myCoursesIds = [...new Set(myCoursesIds)];
  myCourses: Course[] = [];

  constructor() {}

  ngOnInit(): void {
    this.update(this.myCoursesIds);
    /*setTimeout(() => {
      this.update(this.myCoursesIds);
    }, 100);*/
  }

  update(myCoursesIds: any) {
    for (let course of dummyCourses) {
      if (myCoursesIds.includes(course.id)) {
        this.myCourses.push(course);
      }
    }
  }

  remove(newIds: number[]) {
    this.myCourses = [];
    this.update(newIds);
  }

  goBack() {
    window.history.back();
  }
}
