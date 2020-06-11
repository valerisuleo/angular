import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';

import { CoursesIndexComponent } from './courses-index/courses.component';
import { CourseShowComponent } from './course-show/course-show.component';
import { CardComponent } from '../../reusable-components/card/card.component';
import { PillsComponent } from '../../reusable-components/pills/pills.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        AppRoutingModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: CoursesIndexComponent,
                pathMatch: 'full',
                children: [
                    { path: ':id', component: CourseShowComponent },
                ]
            },

        ])
    ],
    exports: [
        CoursesIndexComponent,
        CourseShowComponent,
        CardComponent,
        PillsComponent
    ],
    declarations: [
        CoursesIndexComponent,
        CourseShowComponent,
        CardComponent,
        PillsComponent
    ],
    providers: [],
})
export class CoursesModule { }

