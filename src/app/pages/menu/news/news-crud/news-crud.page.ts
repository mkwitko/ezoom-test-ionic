import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { News } from 'src/app/interfaces/news/news';
import { AllowToPassService } from 'src/app/services/allow-to-pass/allow-to-pass.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CrudService } from 'src/app/services/crud/crud.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ScreenService } from 'src/app/services/screen-effects/screen.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-news-crud',
  templateUrl: './news-crud.page.html',
  styleUrls: ['./news-crud.page.scss'],
})
export class NewsCrudPage{

  sendObject: News = {};
  routeId;
  controller = environment.controllers[2];

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
      this.sendObject.description, this.sendObject.link, this.sendObject.image
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
      this.screen.presentToast('Notícia carregada com sucesso!', 'sucess');
      this.sendObject = res;
    })).catch(() => {
      this.screen.presentToast('Ocorreu um erro ao carregar a notícia solicitada.');
      this.navigationService.goHome();
    });
  }

  create()
  {
    this.crud.create(this.controller, this.sendObject).then(() => {
      this.screen.presentToast('Notícia adicionada com sucesso!', 'sucess');
    }).catch(() => {
      this.screen.presentToast('Ocorreu um erro. Tente novamente mais tarde ou contate a administração do App.');
    }).finally(() => {
      this.navigationService.goHome();
    });
  }

  update()
  {
    this.crud.update(this.controller, this.routeId, this.sendObject).then(() => {
      this.screen.presentToast('Notícia Atualizada com sucesso!', 'sucess');
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
