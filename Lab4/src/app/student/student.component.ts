import { Component, OnInit, Input } from '@angular/core';
import {Student} from "./Student.model";
import { Course } from '../course/Course.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  @Input()
  StudentData :Student;

  constructor() { }

}
