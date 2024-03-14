import { Injectable, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { ICourse } from '../model/iCourse';
import { BehaviorSubject, Observable, catchError, delay, filter, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CourseService{
  courses: ICourse[] = []
  newCourse: Course = new Course({"courseCode": "UE-", "content": [], "starRating": 1, "courseId":0});
  courseList = new BehaviorSubject<Course[]>([]);

  coursesImage: any[] = [
    "assets/images/maths.jpg",
    "assets/images/sport.jpg",
    "assets/images/chimie.jpg",
    "assets/images/histoire.jpg",
    "assets/images/info.jpg",
    "assets/images/philo.jpg",
    "assets/images/physique.jpg"
  ];

  constructor(private http: HttpClient) {
    this.getCourses().subscribe(courses => {
      for(let course of courses){
        this.courseList.getValue().push(new Course(course))
      }
    })
  }

  addCourseIntoList(course: ICourse){
    this.courseList.getValue().push(new Course(course))
    this.newCourse = new Course({"courseCode": "UE-", "content": [], "starRating": 1, "courseId":0});
  }

  getCourses(): Observable<ICourse[]>{
    return this.http.get<ICourse[]>('assets/DB/courses.json')
  }

  getCourse(id: String): Observable<ICourse | undefined>{
    return this.http.get<ICourse[]>('assets/DB/courses.json').pipe(map(items => 
      items.find(p => p.courseId.toString() == id)
    ), delay(5000));
  }

}
