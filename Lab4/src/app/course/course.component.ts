import { Component, OnInit, Input } from '@angular/core';
import {Course} from "./Course.model";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  showCourse:boolean = false;

  @Input()
  CourseData: Course;

  constructor() {
    console.log("CourseComponents-Con");
   }

   public showCourseInfo():void{
     this.showCourse = !this.showCourse;
   }

}
