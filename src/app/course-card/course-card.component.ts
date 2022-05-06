import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../models/course';
import { dummyCourses, myCoursesIds } from '../models/dummy';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit {
  myCoursesIds = myCoursesIds;
  @Input() status: { course: Course; action: number } | undefined;
  @Output() newIds = new EventEmitter<number[]>();

  constructor() {}

  ngOnInit(): void {}

  addToMyCourse(id: any) {
    //unique array element
    if (!myCoursesIds.includes(id)) {
      this.myCoursesIds.push(id);
      alert('The course was successfully added');
    } else {
      alert('The course already exist');
    }
    console.log(myCoursesIds);
  }

  removeFromMyCourse(id: any) {
    console.warn(this.myCoursesIds);
    // this.myCoursesIds = this.myCoursesIds.filter((idCourse) => idCourse !== id);

    let index;
    for (let i = 0; i < myCoursesIds.length; i++) {
      if (id === myCoursesIds[i]) {
        index = i;
        myCoursesIds.splice(index, 1);
        // break;
      }
    }

    console.warn(this.myCoursesIds);

    //pass newIds to coursedashboard
    this.newIds.emit(this.myCoursesIds);
    alert('The course was successfully deleted');
  }
}
