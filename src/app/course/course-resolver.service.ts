import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ICourse } from '../model/iCourse';
import { CourseService } from './course.service';

@Injectable({
  providedIn: 'root'
})
export class CourseResolverService {

  constructor(private courseServ: CourseService){
    this.courseService = courseServ;
  }

  courseService: CourseService

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<ICourse | undefined> {
      const courseId = String(route.paramMap.get('id'));
      return this.courseService.getCourse(courseId)
    }
    
}
