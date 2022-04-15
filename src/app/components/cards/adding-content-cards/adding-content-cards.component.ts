import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-adding-content-cards',
  templateUrl: './adding-content-cards.component.html',
  styleUrls: ['./adding-content-cards.component.scss'],
})
export class AddingContentCardsComponent{

  @Input() content;

  constructor(
    private navigationService: NavigationService,
    private auth: AuthService
  ) { }

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
