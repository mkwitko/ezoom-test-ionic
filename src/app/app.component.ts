import { environment } from 'src/environments/environment';
import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { CrudService } from './services/crud/crud.service';
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
    },
    {
      name: 'Músicas',
      path: 'music-home',
      icon: 'musical-notes-sharp'
    }
  ];

  constructor(
    public menuCtrl: MenuService,
    public auth: AuthService,
    private navigationService: NavigationService,
    private crud: CrudService
  )
  {
    this.auth.getAuth().onAuthStateChanged(user => {
      this.menuCtrl.menuBool = !user;
      if(user)
      {
        this.crud.readAll(environment.controllers[0]).then((res ) =>
        {
          for(const a of res)
          {
            if(user.email === a.userEmail)
            {
              this.auth.user = a;
              this.auth.id = a.id;
              console.log(this.auth.user);
            }
          }
        });
      }
      else {
        this.auth.user = null;
        this.auth.id = null;
      }
    });
  }

  changePage(url: string){
    this.navigationService.changePage(url);
    this.menuCtrl.close();
  }

  logout(){
    this.auth.logout();
  }
}
