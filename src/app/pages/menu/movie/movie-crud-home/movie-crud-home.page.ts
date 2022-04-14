import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { HttpClient } from '@angular/common/http';
import { Movie } from 'src/app/interfaces/movie/movie';
import { ScreenService } from './../../../../services/screen-effects/screen.service';
import { environment } from 'src/environments/environment';
import { CrudService } from './../../../../services/crud/crud.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-crud-home',
  templateUrl: './movie-crud-home.page.html',
  styleUrls: ['./movie-crud-home.page.scss'],
})
export class MovieCrudHomePage{

  public movies = new Array<Movie>();

  constructor(
    private crud: CrudService,
    private screen: ScreenService,
    private navigationService: NavigationService
  )
  {}

  ionViewWillEnter()
  {
    this.crud.readAll(environment.controllers[1]).then(res => {
      this.movies = res;
    }).catch(() => {
      this.screen.presentToast('Não foi possível carregar os dados. Tente novamente mais tarde.');
      this.navigationService.goHome();
    });
  }
}
