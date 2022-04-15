import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { MenuService } from './services/menu/menu.service';
import { NavigationService } from './services/navigation/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public userItens = [
    {
      name: 'Home',
      path: 'home',
      icon: 'home-sharp'
    },
    {
      name: 'Filmes',
      path: 'movie-home',
      icon: 'videocam-sharp'
    },
    {
      name: 'Notícias',
      path: 'news-home',
      icon: 'newspaper-sharp'
    },
    {
      name: 'Jogos',
      path: 'game-home',
      icon: 'game-controller-sharp'
    }
  ];

  public adminItens = [
    {
      name: 'Home',
      path: 'home',
      icon: 'home-sharp'
    },
    {
      name: 'Filmes',
      path: 'movie-crud-home',
      icon: 'videocam-sharp'
    },
    {
      name: 'Notícias',
      path: 'news-crud-home',
      icon: 'newspaper-sharp'
    },
    {
      name: 'Jogos',
      path: 'game-crud-home',
      icon: 'game-controller-sharp'
    }
  ];

  constructor(
    public menuCtrl: MenuService,
    public auth: AuthService,
    private navigationService: NavigationService
  )
  {
    this.auth.loadAll();
  }

  changePage(url: string){
    this.navigationService.changePage(url);
    this.menuCtrl.close();
  }

  logout(){
    this.auth.logout();
  }
}
