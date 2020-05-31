import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesIndexComponent } from './views/courses/courses-index/courses.component';
import { CourseShowComponent } from './views/courses/course-show/course-show.component';
import { BatchedWritesComponent } from './batched-writes/batched-writes.component';
import { LoginComponent } from './views/auth/login/login.component';

const routes: Routes = [
    { path: 'courses/:id', component: CourseShowComponent },
    { path: 'courses', component: CoursesIndexComponent },
    { path: 'batch', component: BatchedWritesComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: 'courses' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
