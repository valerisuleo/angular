import { NgModule } from '@angular/core';
import { PostsComponent } from './posts.component';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from '../../shared/material/material-components.module';
import { RouterModule } from '@angular/router';
import { PostsService } from './services/posts.service';


@NgModule({
    imports: [
        CommonModule,
        MaterialComponentsModule,
        RouterModule.forChild([
            { path: 'posts', component: PostsComponent },
        ])
    ],
    exports: [PostsComponent],
    declarations: [PostsComponent],
    providers: [PostsService],
})
export class PostsModule { }
