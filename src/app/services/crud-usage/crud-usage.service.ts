import { CrudService } from 'src/app/services/crud/crud.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MenuService } from '../menu/menu.service';
import { NavigationService } from '../navigation/navigation.service';
import { ScreenService } from '../screen-effects/screen.service';

@Injectable({
  providedIn: 'root'
})
export class CrudUsageService {

  constructor(
    public menuCtrl: MenuService,
    public auth: AuthService,
    private crud: CrudService,
    private screen: ScreenService
  ) { }

  loadAll()
  {
    this.auth.getAuth().onAuthStateChanged(user => {
      this.menuCtrl.menuBool = !user;
      if(user)
      {
        this.crud.readAll(environment.controllers[0]).then((res ) =>
        {
          console.log('Default get ', res);
          for(const a of res)
          {
            if(user.email === a.userEmail)
            {
              this.auth.user = a;
              this.auth.id = a.id;
            }
          }
        });

        //Movies
        this.crud.readAll(environment.controllers[1]).then((res => {
          this.crud.moviesData = res;
        })).catch(() => {
          this.screen.presentToast('Não foi possível recuperar os dados dos Filmes');
        });

        //News
        this.crud.readAll(environment.controllers[2]).then((res => {
          this.crud.newsData = res;
        })).catch(() => {
          this.screen.presentToast('Não foi possível recuperar os dados das Notícias');
        });

        //Games
        this.crud.readAll(environment.controllers[3]).then((res => {
          this.crud.gamesData = res;
        })).catch(() => {
          this.screen.presentToast('Não foi possível recuperar os dados dos Jogos');
        });
      }
      else {
        this.auth.user = null;
        this.auth.id = null;
      }
    });
  }
}
