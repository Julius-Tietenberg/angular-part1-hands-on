import { Component, OnInit } from '@angular/core';
import {dummyCourses, myCoursesIds} from "../models/dummy";
import {Course} from "../models/course";

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.css']
})
export class CourseOverviewComponent implements OnInit {
  courses: Course[] = dummyCourses;
  showAddCourse = false;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  showFormCourse() {
    this.showAddCourse = !this.showAddCourse
  }
}
