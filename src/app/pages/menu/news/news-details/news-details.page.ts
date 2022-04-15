import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/interfaces/news/news';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.page.html',
  styleUrls: ['./news-details.page.scss'],
})
export class NewsDetailsPage{

  // Variavel de recebimento das informações carregadas
  public loaded: News;

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
    if(this.crud.newsData.length === 0)
    {
      this.navigationService.changePage('news-home');
    }

    this.routeId = this.activeRoute.snapshot.params.id;
    this.load(this.routeId);
  }

  load(routeId: string)
  {
    for(const a of this.crud.newsData)
    {
      if(a.id.toString() === routeId)
      {
        this.loaded = a;
      }
    }
  }

  goTo()
  {
    this.navigationService.away(this.loaded.link);
  }

}
