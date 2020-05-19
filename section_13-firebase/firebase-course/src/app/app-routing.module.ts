import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieShowComponent } from './components/show/movie-show.component';
import { MoviesComponent } from './components/index/movies.component';

const routes: Routes = [
    { path: 'movies/:id', component: MovieShowComponent },
    { path: 'movies', component: MoviesComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
