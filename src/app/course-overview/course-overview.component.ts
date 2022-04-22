import { Component, OnInit } from '@angular/core';
import {dummyCourses} from "../models/dummy";
import {Course} from "../models/course";

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.css']
})
export class CourseOverviewComponent implements OnInit {
  courses: Course[] = dummyCourses;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  reloadPage() {
   window.location.reload()
  }
}
