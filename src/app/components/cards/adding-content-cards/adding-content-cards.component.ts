import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-adding-content-cards',
  templateUrl: './adding-content-cards.component.html',
  styleUrls: ['./adding-content-cards.component.scss'],
})
export class AddingContentCardsComponent{

  // Variavél que recebe o conteúdo do card
  @Input() content;

  constructor(
    private navigationService: NavigationService,
    private auth: AuthService
  ) { }

  // Sistema de navegação
  // Caso o usuário seja admin -> Ir para página de Crud (App/Pages/Menu/XXX/XXX-Crud)
  // Caso o usuário seja user -> Ir para a página de Home (App/Pages/Menu/XXX/XXX)
  goTo(url: string)
  {
    let router = '-home';
    if(this.auth.user.role === 'admin')
    {
      router = '-crud';
    }
    this.navigationService.changePage(url + router);
  }

}
