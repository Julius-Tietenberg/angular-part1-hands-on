import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';
import { dummyMovies } from '../models/dummy';

@Component({
  selector: 'app-moive-detail',
  templateUrl: './moive-detail.component.html',
  styleUrls: ['./moive-detail.component.css'],
})
export class MoiveDetailComponent implements OnInit {
  movie: Movie | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movie = dummyMovies.find((moive) => moive.id === Number(id));
  }

  goBack() {
    window.history.back();
  }
}
