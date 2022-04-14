import { AuthService } from 'src/app/services/auth/auth.service';
import { Component } from '@angular/core';
import { MovieFakeContentService } from 'src/app/fakeContent/movie/movie-fake-content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage{

  content = [
    {
      title: 'Filmes',
      path: 'movie',
      image: '../../../../assets/addingCards/movieCard.jpg'
    },
    {
      title: 'Notícias',
      path: 'news',
      image: '../../../../assets/addingCards/newsCard.jpg'
    },
    {
      title: 'Jogos',
      path: 'game',
      image: '../../../../assets/addingCards/gamesCard.jpg'
    },
    {
      title: 'Músicas',
      path: 'music',
      image: '../../../../assets/addingCards/musicCard.jpg'
    },
  ];

  constructor(
    public auth: AuthService,
    public movieFakeContent: MovieFakeContentService
  ) { }
}
