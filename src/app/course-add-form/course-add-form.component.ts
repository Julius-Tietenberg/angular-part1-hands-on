import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from '../models/course';
import { dummyCourses } from '../models/dummy';

@Component({
  selector: 'app-course-add-form',
  templateUrl: './course-add-form.component.html',
  styleUrls: ['./course-add-form.component.css'],
})
export class CourseAddFormComponent implements OnInit {
  courses: Course[] = dummyCourses;

  course = new FormGroup({
    id: new FormControl(null),
    title: new FormControl('', Validators.required),
    link: new FormControl(''),
    number_students: new FormControl(''),
    description: new FormControl(''),
    time_slot: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  save() {
    // find the course with higher id number
    let courseWithHigherId = this.courses[0];
    for (let cs of this.courses) {
      if (courseWithHigherId.id < cs.id) {
        courseWithHigherId = cs;
      }
    }

    this.course.get('id')?.setValue(courseWithHigherId.id + 1);
    console.warn(this.course.value);

    // add this course on dummyCourses
    dummyCourses.push(this.course.value);
    console.warn(dummyCourses);

    // reset the form
    this.course.reset({
      id: '',
      title: '',
      link: '',
      number_students: '',
      description: '',
      time_slot: '',
    });
  }
}
