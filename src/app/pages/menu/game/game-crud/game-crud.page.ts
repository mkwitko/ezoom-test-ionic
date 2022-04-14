import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Game } from 'src/app/interfaces/game/game';
import { AllowToPassService } from 'src/app/services/allow-to-pass/allow-to-pass.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CrudService } from 'src/app/services/crud/crud.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ScreenService } from 'src/app/services/screen-effects/screen.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-game-crud',
  templateUrl: './game-crud.page.html',
  styleUrls: ['./game-crud.page.scss'],
})
export class GameCrudPage {

  sendObject: Game = {};
  routeId;
  controller = environment.controllers[3];

  constructor(
    private crud: CrudService,
    private allowToPass: AllowToPassService,
    private screen: ScreenService,
    private auth: AuthService,
    private navigationService: NavigationService,
    private activeRoute: ActivatedRoute,
    private alertController: AlertController
  )
  {
    if(this.activeRoute.snapshot.params.id)
    {
      this.routeId = this.activeRoute.snapshot.params.id;
      this.load(this.routeId);
    }
  }

  submit()
  {
    if(this.allowToPass.guardian([
      this.sendObject.title, this.sendObject.subtitle,
      this.sendObject.description, this.sendObject.image
    ]))
    {
      this.sendObject.creatorId = this.auth.id;

        // Update
        if(this.routeId)
        {
          this.update();
        }

        // Objeto novo
        else
        {
          this.create();
        }
    } else {
      this.screen.presentToast('Preencha todos os campos');
    }
  }

  load(routeId: string)
  {
    this.crud.read(this.controller, routeId).then((res => {
      this.screen.presentToast('Jogo carregado com sucesso!', 'sucess');
      this.sendObject = res;
    })).catch(() => {
      this.screen.presentToast('Ocorreu um erro ao carregar o jogo solicitado.');
      this.navigationService.goHome();
    });
  }

  create()
  {
    this.crud.create(this.controller, this.sendObject).then(() => {
      this.screen.presentToast('Jogo adicionado com sucesso!', 'sucess');
    }).catch(() => {
      this.screen.presentToast('Ocorreu um erro. Tente novamente mais tarde ou contate a administração do App.');
    }).finally(() => {
      this.navigationService.goHome();
    });
  }

  update()
  {
    this.crud.update(this.controller, this.routeId, this.sendObject).then(() => {
      this.screen.presentToast('Jogo Atualizado com sucesso!', 'sucess');
    }).catch(() => {
      this.screen.presentToast('Ocorreu um erro. Tente novamente mais tarde ou contate a administração do App.');
    }).finally(() => {
      this.navigationService.goHome();
    });
  }

  async delete() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirme!',
      message: 'Você tem certeza?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
          }
        }, {
          text: 'Okay',
          id: 'confirm-button',
          handler: () => {
            this.crud.delete(this.controller, this.routeId);
            this.navigationService.goHome();
          }
        }
      ]
    });

    await alert.present();
  }


}
