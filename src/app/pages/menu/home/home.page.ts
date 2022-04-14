import { Component } from '@angular/core';
import { MovieFakeContentService } from 'src/app/fakeContent/movie/movie-fake-content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage{

  constructor(
    public movieFakeContent: MovieFakeContentService
  ) { }
}
