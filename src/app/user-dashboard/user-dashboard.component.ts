import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  user = new FormGroup({
    firstName: new FormControl('Bob'),
    lastName: new FormControl('White'),
    age: new FormControl('20'),
    major: new FormControl('Computer Science (Master of Science)'),
    semester: new FormControl('2')
  });

  constructor() {
  }

  ngOnInit(): void {
    const userExists =  window.localStorage.getItem('user');
    if (userExists) {
      const user_json = JSON.parse(userExists);
      this.user.patchValue({
        firstName: user_json.firstName,
        lastName: user_json.lastName,
        age: user_json.age,
        major: user_json.major,
        semester: user_json.semester
      });
    } else {
      window.localStorage.setItem('user', JSON.stringify(this.user.value))
    }
  }

  goBack() {
    window.history.back();
  }

  save() {
    window.localStorage.removeItem('user');
    window.localStorage.setItem('user', JSON.stringify(this.user.value));
  }
}
