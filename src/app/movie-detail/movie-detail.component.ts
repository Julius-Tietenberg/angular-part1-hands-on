import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';
import { dummyMovies } from '../models/dummy';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  movie: Movie | undefined;
  //Task 4.2 Start

  ngOnInit(): void {
    //Task 4.2 Continues

    this.movie = dummyMovies.find((movie) => movie.id === Number(id));
  }

  goBack() {
    window.history.back();
  }
}
