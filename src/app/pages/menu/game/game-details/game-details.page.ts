import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/interfaces/game/game';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.page.html',
  styleUrls: ['./game-details.page.scss'],
})
export class GameDetailsPage {

  // Variavel de recebimento das informações carregadas
  public loaded: Game;

  // Variavel de recebimento de ID da rota
  private routeId;

  constructor(
    public crud: CrudService,
    private activeRoute: ActivatedRoute,
    private navigationService: NavigationService
  )
  {}

  ionViewWillEnter()
  {
    // Precaução para, caso a página seja aberta sem ser vindo de um click da pagina game-crud-home
    // Retornar para a página anterior
    if(this.crud.gamesData.length === 0)
    {
      this.navigationService.changePage('game-home');
    }

    this.routeId = this.activeRoute.snapshot.params.id;
    this.load(this.routeId);
  }

  load(routeId: string)
  {
    for(const a of this.crud.gamesData)
    {
      if(a.id.toString() === routeId)
      {
        this.loaded = a;
      }
    }
  }

}
