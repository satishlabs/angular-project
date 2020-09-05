import { Component } from '@angular/core';
import {Course} from "./course/Course.model";
import {Student} from "./student/Student.model";

@Component({
  selector: 'myroot',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab4';

  mystudent : Student = null;

  constructor(){
    console.log("StudentComponent-Con");

    this.mystudent = new Student();
    this.mystudent.sid;

    this.mystudent.sid=103;
    this.mystudent.sname="Satish Prasad";
    this.mystudent.email="sat@sap.com";
    this.mystudent.phone=1234;
    this.mystudent.city="Delhi";

    this.mystudent.mycourse = new Course();

    this.mystudent.mycourse.cid=99;
    this.mystudent.mycourse.cname="Angular7";
    this.mystudent.mycourse.trainer="Srinivas Dande";
    this.mystudent.mycourse.pirce=16000;
    this.mystudent.mycourse.isActive=true;
  }
}
