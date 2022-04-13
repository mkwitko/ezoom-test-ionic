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

  constructor(
    public menuCtrl: MenuService,
    private auth: AuthService,
    private navigationService: NavigationService
  )
  {
    this.auth.getAuth().onAuthStateChanged(user => {
      this.menuCtrl.menuBool = !user;
      if(user)
      {
        this.auth.id = user.uid;
      }
    });
  }
}
