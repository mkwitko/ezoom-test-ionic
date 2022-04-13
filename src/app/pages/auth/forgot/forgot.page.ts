import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage {

  recoveryEmail = '';

  constructor(
    private navigationService: NavigationService,
    private authService: AuthService,
  ) { }

  send()
  {
    this.authService.resetPassword(this.recoveryEmail);
  }

  goTo(url: string)
  {
    this.navigationService.changePage(url);
  }


}
