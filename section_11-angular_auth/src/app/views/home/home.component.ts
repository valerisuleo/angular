import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../service/movies.service';
import { AuthService } from '../../service/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    movies = [];
    username: string;

    constructor(private service: MoviesService, private authService: AuthService) { }

    getMovies() {
        this.service.getAll()
        .subscribe((data) => {
            // console.log('data', data);
            this.movies = data;
        })
    }

    getUsername() {
        const decodeToken = this.authService.getCurrentUser();
        if (decodeToken) {
            this.username = decodeToken.username;
        }
    }

    ngOnInit(): void {
        this.getMovies();
        this.getUsername()
    }

}
