import { Component } from '@angular/core';
import { MovieFakeContentService } from 'src/app/fakeContent/movie/movie-fake-content.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage{

  constructor(
    public movieFakeContent: MovieFakeContentService
  ) { }

}
