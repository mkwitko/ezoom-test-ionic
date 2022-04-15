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

  // Variavél utilizada para o recebimento do Body
  sendObject: News = {};

  // Variavle utilizada para receber o ID da rota
  routeId;

  // Variavel utilizada para receber o endereço do controller da API
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
    // Essa rota pode ser acessada para a criação ou para a atualização de um elemento
    // Caso seja utilizada para a atualização, a rota contará com um ID atrelado
    // Este id é então passado para a variavél routeId
    // Que é utilizada para carregar os dados do objeto, via função Load

    // Caso esta rota seja utilizada para a criação de um novo objeto
    // O Condicional abaixo retornará false e, portanto, pulará o carregamento de informações
    // Trazendo um formulário vazio.
    if(this.activeRoute.snapshot.params.id)
    {
      this.routeId = this.activeRoute.snapshot.params.id;
      this.load(this.routeId);
    }
  }

  // Chama, via API, as funcioanlidades de Criar ou Atualizar um elemento
  // Com base no condicional da existência, ou não, de um RouteId
  // Caso tenha RouteID então o elemento já exista e será atualizado
  // Caso não tenha um RouteID então este elemento não existe no banco de dados e precisa ser Criado
  submit()
  {
    // Verifica a existência das variavéis abaixo
    if(this.allowToPass.guardian([
      this.sendObject.title, this.sendObject.subtitle,
      this.sendObject.description, this.sendObject.link, this.sendObject.image
    ]))
    {
      // A variavél creatorID serve para que, futuramente, possamos saber e
      // Retornar a informação de quem criou este elemento
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

  // Função utilizada para realizar o carregamento das informações do elemento solicitado
  // Só será chamada caso existe um routeId na rota
  load(routeId: string)
  {
    // Chamamento da função Get, via API
    this.crud.read(this.controller, routeId).then((res => {
      this.screen.presentToast('Notícia carregada com sucesso!', 'sucess');

      // Recebimento dos valores da api sendo atrelados à variavél sendObject
      // Essa variavél será utilizada para demonstrar as informações via HTML
      // E para prover as informações de Body nas funções de Create ou (nesse caso) de Update
      this.sendObject = res;
    })).catch(() => { // Caso exista um erro na requisição
      this.screen.presentToast('Ocorreu um erro ao carregar a notícia solicitada.');
      this.navigationService.goHome();
    });
  }

  // Chamamento da função de criação, via Api
  create()
  {
    this.crud.create(this.controller, this.sendObject).then(() => {
      this.screen.presentToast('Notícia adicionada com sucesso!', 'sucess');
    }).catch(() => {  // Caso exista um erro na requisição
      this.screen.presentToast('Ocorreu um erro. Tente novamente mais tarde ou contate a administração do App.');
    }).finally(() => { // Chamada ao final das requisições, sejam elas bem ou mal sucedidas
      this.navigationService.goHome();
    });
  }

   // Chamamento da função de atualização, via Api
  update()
  {
    this.crud.update(this.controller, this.routeId, this.sendObject).then(() => {
      this.screen.presentToast('Notícia Atualizada com sucesso!', 'sucess');
    }).catch(() => { // Caso exista um erro na requisição
      this.screen.presentToast('Ocorreu um erro. Tente novamente mais tarde ou contate a administração do App.');
    }).finally(() => { // Chamada ao final das requisições, sejam elas bem ou mal sucedidas
      this.navigationService.goHome();
    });
  }

  // Alert + Chamada de função de delete, caso seja confirmado o alert
  async delete() {
    // Chamada de um alert, com botões de cancelar e confirmar
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
            // Chamamento da função de delete, via Api
            this.crud.delete(this.controller, this.routeId);
            this.navigationService.goHome();
          }
        }
      ]
    });

    await alert.present();
  }

}
