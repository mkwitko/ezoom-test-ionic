import { AuthService } from './../../../services/auth/auth.service';
import { NavigationService } from './../../../services/navigation/navigation.service';
import { UserInterface } from './../../../interfaces/auth/user-interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Recebe os valores de autenticação
  public userLogin: UserInterface = {};


  constructor(
    private navigationService: NavigationService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  // Processo de autenticação, recebe a variavel userLogin, que é preenchida via ngModel no html
  login()
  {
    this.authService.login(this.userLogin);
  }

  // Navega para uma página dentro do app
  goTo(url: string)
  {
    this.navigationService.changePage(url);
  }

}
