import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseRoutingModule } from './course-routing.module';


@NgModule({
  declarations: [
    CourseListComponent,
    CourseAddComponent,
    CourseDetailComponent,
  ],
  imports: [
    SharedModule,
    CourseRoutingModule,
  ],
  exports: [
    CourseListComponent
  ]
})
export class CourseModule { }
