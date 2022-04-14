import { Component, OnInit } from '@angular/core';
import { Music } from 'src/app/interfaces/music/music';
import { CrudService } from 'src/app/services/crud/crud.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ScreenService } from 'src/app/services/screen-effects/screen.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-music-crud-home',
  templateUrl: './music-crud-home.page.html',
  styleUrls: ['./music-crud-home.page.scss'],
})
export class MusicCrudHomePage {

  public music = new Array<Music>();

  constructor(
    private crud: CrudService,
    private screen: ScreenService,
    private navigationService: NavigationService
  )
  {}

  ionViewWillEnter()
  {
    this.crud.readAll(environment.controllers[4]).then(res => {
      this.music = res;
    }).catch(() => {
      this.screen.presentToast('Não foi possível carregar os dados. Tente novamente mais tarde.');
      this.navigationService.goHome();
    });
  }

}
