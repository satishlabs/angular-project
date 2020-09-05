import { Component } from '@angular/core';
import {Course} from "./course.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab5';

  //Properties
  cname: string="Angular7";
  cost: number=20000;
  trainer: string ="Srinivas Dande";
  startDate: Date = new Date();
  isOnline: boolean = false;

  //Objects
  course :Course={
    cname:"Angular7",
    cost:20000,
    trainer:"Srinivas Dande",
    duration:'25hrs',
  }

  //Arrays
  courseNames: string[] = ["Angular 7","Node JS","MnongoDB","Epress JS","ReactJS"];

  //List or Array of Objects
  mycourses:Course[]=[
    {cname:"Angular 7",cost:10000,trainer:"Srinivas Dande",duration:"25Hrs"},
    {cname:"Node JS",cost:5000,trainer:"Satish Prasad",duration:"10Hrs"},
    {cname:"MonogDB",cost:6000,trainer:"manish",duration:"5Hrs"},
    {cname:"Express JS",cost:4000,trainer:"Srinivas Dande",duration:"5Hrs"},
  ];

  //Methods of Functions

  showMessage1(){
    alert("You clicked on Button");
  }

  showMessage2(){
    alert("Hi"+name+" Your Email is: ");
  }

  getCoruseInfo(course:Course){
    alert("Hi Course name: "+course.cname+" Cost: "+course.cost);
  }
}
