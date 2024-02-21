import { Injectable } from '@angular/core';
import * as courseData from '../../assets/DB/courses.json';
import { Course } from '../model/course';
import { ICourse } from '../model/iCourse';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseList: Course[] = []
  courses: any[] = courseData;
  newCourse: Course = new Course({"courseCode": "UE-", "content": [], "starRating": 1, "courseId":0});

  coursesImage: any[] = [
    "assets/images/maths.jpg",
    "assets/images/sport.jpg",
    "assets/images/chimie.jpg",
    "assets/images/histoire.jpg",
    "assets/images/info.jpg",
    "assets/images/philo.jpg",
    "assets/images/physique.jpg"
  ];

  constructor() {
    for(let i=0; i < this.courses.length; i++){
      this.courseList.push(new Course(this.courses[i]))
    }
  }

  addCourseIntoList(course: ICourse){
    this.courseList.push(new Course(course))
    this.newCourse = new Course({"courseCode": "UE-", "content": [], "starRating": 1, "courseId":0});
  }
}
