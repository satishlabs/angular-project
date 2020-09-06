import { Component, OnInit, Input } from '@angular/core';
import {Course} from "./course.model";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input()
  MyCourse : Course = null;

  showCourse :boolean = false;


  constructor() { }

  public showCourseInfo():void{
    console.log("showCourse - Clicked");
    this.showCourse = !this.showCourse;
  }

  ngOnInit() {
  }

}
