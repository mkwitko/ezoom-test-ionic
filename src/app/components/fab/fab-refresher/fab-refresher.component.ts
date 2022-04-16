import { ScreenService } from 'src/app/services/screen-effects/screen.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fab-refresher',
  templateUrl: './fab-refresher.component.html',
  styleUrls: ['./fab-refresher.component.scss'],
})
export class FabRefresherComponent{

  constructor(
    private auth: AuthService,
    private screen: ScreenService
  ) { }

  refresh()
  {
    this.auth.loadAll();
    this.screen.presentToast('Atualizando banco de dados...', 'info');
  }

}
