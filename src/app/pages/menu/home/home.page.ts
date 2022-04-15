import { environment } from 'src/environments/environment';
import { News } from 'src/app/interfaces/news/news';
import { Movie } from 'src/app/interfaces/movie/movie';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Component } from '@angular/core';
import { MovieFakeContentService } from 'src/app/fakeContent/movie/movie-fake-content.service';
import { CrudService } from 'src/app/services/crud/crud.service';
import { Game } from 'src/app/interfaces/game/game';
import { ScreenService } from 'src/app/services/screen-effects/screen.service';

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
    }
  ];

  constructor(
    public auth: AuthService
  )
  {}


}
