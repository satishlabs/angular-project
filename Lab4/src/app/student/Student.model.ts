import { Course } from '../course/Course.model';

export class Student{
    sid:number;
    sname:string;
    email:string;
    phone:number;
    city:string;
    
    mycourse: Course;

    constructor(){
        
    }
}