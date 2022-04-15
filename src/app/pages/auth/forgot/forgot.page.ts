import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage {

  // Variavél utilizada para o recebimento do e-mail utilizado para recuperar a senha
  recoveryEmail = '';

  constructor(
    private navigationService: NavigationService,
    private authService: AuthService,
  ) { }

  // Envia um e-mail para o usuário com um formulário de criação de nova senha
  send()
  {
    this.authService.resetPassword(this.recoveryEmail);
  }

  // Navega para uma página dentro do app
  goTo(url: string)
  {
    this.navigationService.changePage(url);
  }


}
