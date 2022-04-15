import { Component } from '@angular/core';
import { Game } from 'src/app/interfaces/game/game';
import { CrudService } from 'src/app/services/crud/crud.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ScreenService } from 'src/app/services/screen-effects/screen.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-game-crud-home',
  templateUrl: './game-crud-home.page.html',
  styleUrls: ['./game-crud-home.page.scss'],
})
export class GameCrudHomePage{

  public games = new Array<Game>();

  constructor(
    public crud: CrudService,
    private screen: ScreenService,
    private navigationService: NavigationService
  )
  {}

  ionViewWillEnter()
  {
    this.crud.readAll(environment.controllers[3]).then(res => {
      this.games = res;
    }).catch(() => {
      this.screen.presentToast('Não foi possível carregar os dados. Tente novamente mais tarde.');
      this.navigationService.goHome();
    });
  }
}
