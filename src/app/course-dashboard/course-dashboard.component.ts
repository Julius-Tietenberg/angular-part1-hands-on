import { Component, OnInit } from '@angular/core';
import {Course} from "../models/course";
import {dummyCourses, myCoursesIds} from "../models/dummy";

@Component({
  selector: 'app-course-dashboard',
  templateUrl: './course-dashboard.component.html',
  styleUrls: ['./course-dashboard.component.css']
})
export class CourseDashboardComponent implements OnInit {

  myCourses: Course[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let course of dummyCourses) {
      if (myCoursesIds.includes(course.id)) {
        this.myCourses.push(course);
      }
    }
  }

  goBack() {
    window.history.back();
  }
}
