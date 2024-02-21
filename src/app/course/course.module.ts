import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseAddComponent } from './course-add/course-add.component';



@NgModule({
  declarations: [
    CourseListComponent,
    CourseDetailsComponent,
    CourseAddComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    CourseListComponent
  ]
})
export class CourseModule { }
