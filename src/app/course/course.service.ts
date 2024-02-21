import { Injectable } from '@angular/core';
import * as courseData from '../../assets/DB/courses.json';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseList: Course[] = []
  courses: any[] = courseData;

  constructor() {
    for(let i=0; i < this.courses.length; i++){
      this.courseList.push(new Course(this.courses[i]))
    }
  }
}
