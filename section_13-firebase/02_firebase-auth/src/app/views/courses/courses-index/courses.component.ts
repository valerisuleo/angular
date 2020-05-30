import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Observable, Subscription } from 'rxjs';
import { ITab, ICourse } from '../interfaces';

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss']
})
export class CoursesIndexComponent implements OnInit, OnDestroy {

    tabs: ITab[] = [
        {
            name: 'Beginners',
            viewMode: 'beginners-courses'
        },
        {
            name: 'Advanced',
            viewMode: 'advanced-courses'
        },
    ];

    viewMode = 'beginners-courses';
    label = 'Details';

    advanced: ICourse[] = [];
    beginners: ICourse[] = [];
    subscription: Subscription;

    constructor(private service: DataService) { }

    toggleActiveClass(current: ITab): void {
        this.viewMode = current.viewMode;
    }

    coursesIndex(): void {
        this.subscription = this.service.getAll('courses')
        .subscribe((response) => {
            this.advanced = this.filterCourses(response, 'ADVANCED');
            this.beginners = this.filterCourses(response, 'BEGINNER');
        });
    }

    filterCourses(response, string): ICourse[] {
       return response.filter((item: ICourse) => {
           return item.categories.includes(string);
       });
    }

    ngOnInit(): void {
        this.coursesIndex();
    }
    
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}




    // withClassicPromise() {
    //     const courses = [];
    //     const response = this.service.getPromise();
    //     response
    //         .then((data) => {
    //             data.forEach((el) => {
    //                 const obj = {
    //                     ...el.data(),
    //                     id: el.id
    //                 }
    //                 courses.push(obj);
    //                 console.log(courses);
    //             });
    //         });
    //     return courses;
    // }