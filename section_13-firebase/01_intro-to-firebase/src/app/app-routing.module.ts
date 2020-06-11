import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CoursesIndexComponent } from './views/courses/courses-index/courses.component';
import { CourseShowComponent } from './views/courses/course-show/course-show.component';
import { BatchedWritesComponent } from './batched-writes/batched-writes.component';

const routes: Routes = [
    {
        path: 'courses',
        loadChildren: () => import('./views/courses/courses.module').then(m => m.CoursesModule)
    },
    { path: 'batch', component: BatchedWritesComponent },
    { path: '**', redirectTo: 'courses' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
