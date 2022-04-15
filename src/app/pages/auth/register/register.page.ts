import { Component } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/auth/user-interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  // Recebe os valores de cadastro
  public userRegistration: UserInterface = {};

  // Utilizado para comparar se a senha digitada está correta
  public confirmPassword = '';

  // Variavel artifical para user como roleAssignment
  public admin = false;

  constructor(
    private navigationService: NavigationService,
    private authService: AuthService,
  ) { }

  // Processo de autenticação, recebe a variavel userRegistration, que é preenchida via ngModel no html
  register()
  {
    this.roleAssign();
    this.authService.register(this.userRegistration, this.confirmPassword);
  }

  // Navega para uma página dentro do app
  goTo(url: string)
  {
    this.navigationService.changePage(url);
  }

  // Essa função só serve para o próposito deste teste
  // Ela determina se o usuário cadastrado é admin ou user
  // Em um ambiente de produção é necessário fazer um roleAssign mais coerente
  // Possibilidade: Criar um painel de controle para o administrador definir a Role de cada usuário
  roleAssign()
  {
    if(this.admin === false)
    {
      this.userRegistration.role = 'user';
    }
    else
    {
      this.userRegistration.role = 'admin';
    }
  }
}
