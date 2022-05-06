import { Component, OnInit } from '@angular/core';
import { dummyMovies } from '../models/dummy';
import { Movie } from '../models/movie';
// import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.css'],
})
export class MovieOverviewComponent implements OnInit {
  movies: Movie[] = dummyMovies;

  constructor() {}

  ngOnInit(): void {}
}
