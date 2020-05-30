import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ILesson, ICourse } from '../interfaces';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'course-show',
    templateUrl: './course-show.component.html',
    styleUrls: ['./course-show.component.scss']
})
export class CourseShowComponent implements OnInit, OnDestroy {

    course$: Observable<any>
    lessons: ILesson[] = [];
    formModel: ICourse;
    subscription: Subscription;
    lastPageloaded: number = 0;
    isLoading: boolean = false;
    isEdit: boolean = false;
    id: string = this.route.snapshot.paramMap.get('id');

    constructor(private service: DataService, private route: ActivatedRoute) { }

    showCourse(): void {
        this.course$ = this.service.getItem('courses', this.id);
        // GET REF. OBJ
        this.course$.subscribe((data) => {
            if (data.refLesson) {
                const { path } = data.refLesson;
                this.service.getRefItem(path)
                    .subscribe((el) => {
                        console.log(el);
                    });
            }
        });

        this.getNested(this.lastPageloaded);
    }

    getNested(lastPageloaded): void {
        this.isLoading = true;
        const nestedCollectionPath: string = 'lessons';

        this.subscription = this.service.getLessonsPaginated(`courses/${this.id}/${nestedCollectionPath}`, "asc", lastPageloaded, 3)
            .pipe(
                finalize(() => {
                    this.isLoading = false;
                })
            )
            .subscribe((response) => {
                response.forEach((item: ILesson) => {
                    this.lessons.push(item);
                });
            });
    }

    edit(current: ICourse): void {
        this.isEdit = true;
        this.formModel = current;
        this.formModel.titles.description = current.titles.description;
        this.formModel.titles.longDescription = current.titles.longDescription;
    }

    back(): void {
        this.isEdit = false;
    }

    onSubmit(): void {
        this.service.update('courses', this.id, this.formModel);
        this.isEdit = false;
    }

    loadMoreLessons(): void {
        this.lastPageloaded = this.lastPageloaded + 1;
        this.getNested(this.lastPageloaded);
    }

    ngOnInit(): void {
        this.showCourse();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
