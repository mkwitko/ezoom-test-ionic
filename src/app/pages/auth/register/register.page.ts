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

  public userRegistration: UserInterface = {};
  public confirmPassword = '';


  constructor(
    private navigationService: NavigationService,
    private authService: AuthService,
  ) { }

  register()
  {
    this.authService.register(this.userRegistration, this.confirmPassword);
  }

  goTo(url: string)
  {
    this.navigationService.changePage(url);
  }

}
