import { Component, OnInit } from '@angular/core';
import {Course} from "../course/course.model";


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  MyCourseList:Course[] =null;

  mycoursesToDisplay: Course[] =null;
  constructor() { 
    this.MyCourseList =[
      {
        cid:101,
        cname:"Angular 7",
        trianer: "Srinivas Dande",
        price:15000,
        duration: "50Hrs",
        isOnline:true
      },
      {
        cid:102,
        cname:"React JS",
        trianer: "Srinivas Dande",
        price:15000,
        duration: "50Hrs",
        isOnline:true
      },
      {
        cid:103,
        cname:"java Full Stack",
        trianer: "Srinivas Dande",
        price:50000,
        duration: "150Hrs",
        isOnline:false
      },
      {
        cid:104,
        cname:"SpringBoot MS",
        trianer: "Srinivas Dande",
        price:22000,
        duration: "80Hrs",
        isOnline:true
      },
      {
        cid:101,
        cname:"DevOps",
        trianer: "Srinivas Dande",
        price:15000,
        duration: "80Hrs",
        isOnline:false,
      }
    ]
  }

  ngOnInit() {
    this.mycoursesToDisplay =[...this.MyCourseList];
  }

  public showLowpriceCourses():void{
    console.log("LowPrice - Clicked");
    let mycourses = [...this.MyCourseList];
    console.log(mycourses);
    mycourses = mycourses.filter(mycourses=>mycourses.price<=15000);
    console.log(mycourses);
    this.mycoursesToDisplay =[...mycourses];
  }

  public showOnlineCourses():void{
    console.log("Online - Clicked");
    let mycourses = [...this.MyCourseList];
    console.log(mycourses);
    mycourses = mycourses.filter(mycourses => mycourses.isOnline === true);
    console.log(mycourses);
    this.mycoursesToDisplay =[...mycourses];
  }

  public showAllCourses():void{
     console.log("All -  Clicked");
     this.mycoursesToDisplay = [...this.MyCourseList];
  }
}
