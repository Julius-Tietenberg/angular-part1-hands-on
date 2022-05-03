import { Component, OnInit } from '@angular/core';
import { dummyCourses } from '../models/dummy';
import { Course } from '../models/course';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.css'],
})
export class CourseOverviewComponent implements OnInit {
  courses: Course[] = dummyCourses;

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

  reloadPage() {
    window.location.reload();
  }

  save() {
    let maxId = 0,
      index = 0;
    for (index; index < this.courses.length; index++) {
      if (maxId < this.courses[index].id) {
        maxId = this.courses[index].id;
      }
    }
    this.newCourse.value.id = maxId + 1;
    this.courses.push(this.newCourse.value);
  }
  showAddForm() {
    this.isShow = !this.isShow;
  }
}
