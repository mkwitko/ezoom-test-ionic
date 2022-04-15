import { AuthService } from './../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/auth/user-interface';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

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
