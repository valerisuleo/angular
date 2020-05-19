import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'movie-show',
    templateUrl: './movie-show.component.html',
    styleUrls: ['./movie-show.component.scss']
})
export class MovieShowComponent implements OnInit {

    movie$: Observable<any>;

    constructor(private service: DataService, private route: ActivatedRoute) { }

    movieShow() {
        const id = this.route.snapshot.paramMap.get('id');
        this.movie$ = this.service.getItem('movies', id);
    }

    ngOnInit(): void {
        this.movieShow();
    }

}
