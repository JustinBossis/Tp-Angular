import { Component } from '@angular/core';
import { Course } from '../../model/course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent{

  constructor(private course: CourseService){
    this.courseList = course.courseList;
  }

  //Attributs
  title = 'Courses List';
  courseList: Course[] = []
  isVisible: boolean = true;


  //Method

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }

  onRatingClicked(message: string): void {
    console.log(message)
  }

}


