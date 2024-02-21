import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit, OnDestroy{

  
  constructor(private course: CourseService){
    this.courseService = course;
  }

  //Attributs
  courseService: CourseService
  @Output() submitClicked : EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    console.log("init")
    console.log(this.courseService.newCourse)
  }
  ngOnDestroy(): void {
    console.log("destroy")
  }
  
  onSubmit(courseForm:any) {
    this.courseService.addCourseIntoList(this.courseService.newCourse)
    this.submitClicked.emit(`Course created!`);
  }

  changeRating(event: Event, rate: number) {
    let stars = document.getElementsByClassName("form-star")
    for(let i = 0; i < stars.length; i++){
      if(i < rate){
        if(stars[i].classList.contains("starDisabled")){
          stars[i].classList.remove("starDisabled");
        }
      }else{
        if(!stars[i].classList.contains("starDisabled")){
          stars[i].classList.add("starDisabled");
        }
      }
    }
  }

  changeImageURL(event: Event, nb: number) {
    let images = document.getElementsByClassName("formImageChoice")
    for(let i = 0; i < images.length; i++){
      if(i == nb){
        if(images[i].classList.contains("disabledImage")){
          images[i].classList.remove("disabledImage");
        }
      }else{
        if(!images[i].classList.contains("disabledImage")){
          images[i].classList.add("disabledImage");
        }
      }
    }
  }


}
