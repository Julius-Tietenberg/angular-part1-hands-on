import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../models/course";
import {myCoursesIds} from "../models/dummy";

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  myCoursesIds = myCoursesIds;
  @Input() status: {course: Course; action: number} | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  addToMyCourse(id: any) {
    alert("The course was successfully added");
    this.myCoursesIds.push(id);
  }

  removeFromMyCourse(id: any) {
    console.warn(this.myCoursesIds);
    // this.myCoursesIds = this.myCoursesIds.filter(idCourse =>  idCourse !== id);

    let index;
    for (let i = 0; i < myCoursesIds.length; myCoursesIds) {
      if (id === myCoursesIds[i]) {
        index = i;
        break;
      }
    }

    console.warn("position -> " +  index);
    if (index) {
      myCoursesIds.splice(index, 1);
    }

    console.warn(this.myCoursesIds);

    // alert("The course was successfully deleted");
    // this.update(this.myCoursesIds);
  }
}
