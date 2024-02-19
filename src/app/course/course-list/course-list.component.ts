import { Component, OnInit } from '@angular/core';
import * as courseData from '../../../assets/DB/courses.json';
import { Course } from '../../model/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{

  //Attributs
  title = 'Courses List';
  courseList: Course[] = []
  courses: any[] = courseData;
  isVisible: boolean = true;

  ngOnInit(): void {
    for(let i=0; i < this.courses.length; i++){
      this.courseList.push(new Course(this.courses[i]))
    }
  }

  //Method

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }

  onRatingClicked(message: string): void {
    console.log(message)
  }

}


