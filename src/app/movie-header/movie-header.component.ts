import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-header',
  templateUrl: './movie-header.component.html',
  styleUrls: ['./movie-header.component.css'],
})
export class MovieHeaderComponent implements OnInit {
  @Input() name: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
