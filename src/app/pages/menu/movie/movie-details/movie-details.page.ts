import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie/movie';
import { SafeUrlService } from 'src/app/services/safe-url/safe-url.service';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage{

  // Variavel de recebimento das informações carregadas
  public loaded: Movie;

  // Variavel de recebimento do link do vídeo do youtube após sanitizer
  public trustedLink;

  // Variavel de recebimento de ID da rota
  private routeId;

  constructor(
    public crud: CrudService,
    private activeRoute: ActivatedRoute,
    private safeUrl: SafeUrlService,
    private navigationService: NavigationService
  )
  {}

  ionViewWillEnter()
  {
    // Precaução para, caso a página seja aberta sem ser vindo de um click da pagina game-crud-home
    // Retornar para a página anterior
    if(this.crud.moviesData.length === 0)
    {
      this.navigationService.changePage('movie-home');
    }

    this.routeId = this.activeRoute.snapshot.params.id;
    this.load(this.routeId);
  }

  load(routeId: string)
  {
    for(const a of this.crud.moviesData)
    {
      if(a.id.toString() === routeId)
      {
        this.loaded = a;

        // Processo de depuração do link do youtube afim de que não seja bloqueado
        this.trustedLink = this.safeUrl.sanitize(this.loaded.link);
      }
    }
  }

}
