import { News } from './../../../../interfaces/news/news';
import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud/crud.service';
import { ScreenService } from 'src/app/services/screen-effects/screen.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-news-crud-home',
  templateUrl: './news-crud-home.page.html',
  styleUrls: ['./news-crud-home.page.scss'],
})
export class NewsCrudHomePage{


  public news = new Array<News>();

  constructor(
    private crud: CrudService,
    private screen: ScreenService,
    private navigationService: NavigationService
  )
  {}

  ionViewWillEnter()
  {
    this.crud.readAll(environment.controllers[2]).then(res => {
      this.news = res;
    }).catch(() => {
      this.screen.presentToast('Não foi possível carregar os dados. Tente novamente mais tarde.');
      this.navigationService.goHome();
    });
  }

}
