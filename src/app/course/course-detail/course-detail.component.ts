import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from 'src/app/model/course';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  constructor(private courseServ: CourseService, private route: ActivatedRoute){
    this.courseService = courseServ;
    this.course = null

    
  }
  ngOnInit(): void {
    this.course = new Course(this.route.snapshot.data['courseResolved'])
  }

  courseId: string = ""
  courseService: CourseService
  course: Course | null
}
