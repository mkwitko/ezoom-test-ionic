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

  public userLogin: UserInterface = {};


  constructor(
    private navigationService: NavigationService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  login()
  {
    this.authService.login(this.userLogin);
  }

  loginGuest()
  {
    this.authService.loginAnonAsUser();
  }

  loginGuestAdmin()
  {
    this.authService.loginAnonAsAdmin();
  }

  goTo(url: string)
  {
    this.navigationService.changePage(url);
  }

}
