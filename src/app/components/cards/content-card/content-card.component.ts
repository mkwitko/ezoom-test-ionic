import { NavigationService } from './../../../services/navigation/navigation.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent{

  // Recebimento de destino
  // Passar somente o inicio do caminho
  @Input() url;

  //Preenchimento das informações do card
  @Input() content;

  // Somente chamar crud = true caso seja admin
  // No caso do usuário não é necessário chamar este parametro
  @Input() crud = false;

  constructor(
    private navigationService: NavigationService
  ) { }

  // Sistema de navegação
  // Utiliza o Input Url junto com o parametro de ID para saber para qual elemento ir
  // Caso o usuário seja admin -> Ir para página de Crud (App/Pages/Menu/XXX/XXX-Crud)
  // Caso o usuário seja user -> Ir para a página de Detalhes (App/Pages/Menu/XXX/XXX-Details)
  goTo(id: string)
  {
    let route = '-details/';

    if(this.crud === true)
    {
      route = '-crud/';
    }
    const url = this.url + route + id;
    this.navigationService.changePage(url);
  }

}
