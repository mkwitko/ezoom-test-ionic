import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { environment } from 'src/environments/environment';
import { ScreenService } from './../../../../services/screen-effects/screen.service';
import { AllowToPassService } from './../../../../services/allow-to-pass/allow-to-pass.service';
import { Component } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie/movie';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-movie-crud',
  templateUrl: './movie-crud.page.html',
  styleUrls: ['./movie-crud.page.scss'],
})
export class MovieCrudPage{

  sendObject: Movie = {};
  routeId;

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
      this.sendObject.description, this.sendObject.link,
      this.sendObject.image
    ]))
    {
      if(this.sendObject.link.includes('embed'))
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
      } else
      {
        this.screen.presentToast('Insira um link do Youtube no formato Embed');
      }
    } else {
      this.screen.presentToast('Preencha todos os campos');
    }
  }

  load(routeId: string)
  {
    this.crud.read(environment.controllers[1], routeId).then((res => {
      this.screen.presentToast('Filme carregado com sucesso!', 'sucess');
      this.sendObject = res;
    })).catch(() => {
      this.screen.presentToast('Ocorreu um erro ao carregar o filme solicitado.');
      this.navigationService.goHome();
    });
  }

  create()
  {
    this.crud.create(environment.controllers[1], this.sendObject).then(() => {
      this.screen.presentToast('Filme adicionado com sucesso!', 'sucess');
    }).catch(() => {
      this.screen.presentToast('Ocorreu um erro. Tente novamente mais tarde ou contate a administração do App.');
    }).finally(() => {
      this.navigationService.goHome();
    });
  }

  update()
  {
    this.crud.update(environment.controllers[1], this.routeId, this.sendObject).then(() => {
      this.screen.presentToast('Filme Atualizado com sucesso!', 'sucess');
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
            this.crud.delete(environment.controllers[1], this.routeId);
            this.navigationService.goHome();
          }
        }
      ]
    });

    await alert.present();
  }

}
