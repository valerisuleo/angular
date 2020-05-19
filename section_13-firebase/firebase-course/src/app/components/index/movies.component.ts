import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

    movies$: Observable<any>

    formModel = { title: '', liked: true};

    currentId: string;
    isNewMovie: boolean = true;

    constructor( private service: DataService) { }

    moviesIndex() {
        this.movies$ = this.service.getAll('movies');
    }

    movieNew() {
        this.service.create('movies', this.formModel);
    }

    setFormValue(movie) {
        this.isNewMovie = false;
        this.currentId = movie.id
        this.formModel.liked = movie.liked;
        this.formModel.title = movie.title;
    }

    movieUpdate() {
        this.service.update('movies', this.currentId, this.formModel);
    }
    
    movieDelete(movie) {
        this.service.delete('movies', movie.id);
    }

    submit() {
        if (this.isNewMovie) {
           this.movieNew();
        } else {
            this.movieUpdate();
        }
    }

    ngOnInit(): void {
        this.moviesIndex();
    }

}
