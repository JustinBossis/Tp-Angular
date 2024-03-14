import { NgModule } from '@angular/core';
import { Routes, RouterModule, mapToCanActivate, mapToResolve } from '@angular/router';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseGuardService } from './course-guard.service';
import { CourseResolverService } from './course-resolver.service';

export const coursesRoutes: Routes = [
  { path: 'course/:id', component: CourseDetailComponent , canActivate: mapToCanActivate([CourseGuardService]),  resolve: {courseResolved: mapToResolve(CourseResolverService)}},
  {path: 'course', component: CourseListComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(
      coursesRoutes
    ),
  ],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
