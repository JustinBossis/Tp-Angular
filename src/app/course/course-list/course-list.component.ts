import { Component } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent{


  constructor(private course: CourseService){
    this.courseService = course;
  }

  //Attributs
  title = 'Courses List';
  courseService: CourseService
  isVisible: boolean = true;
  isFormVisible: boolean = false;


  //Method

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }

  toggleFormVisibility(): void {
    this.isFormVisible = !this.isFormVisible;
  }

  onRatingClicked(message: string): void {
    console.log(message)
  }

  onFormSubmitClicked(message: string) {
    this.toggleFormVisibility()
  }

}


