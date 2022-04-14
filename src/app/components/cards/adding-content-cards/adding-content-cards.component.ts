import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-adding-content-cards',
  templateUrl: './adding-content-cards.component.html',
  styleUrls: ['./adding-content-cards.component.scss'],
})
export class AddingContentCardsComponent{

  @Input() content;

  constructor(
    private navigationService: NavigationService
  ) { }

  goTo(url: string)
  {
    this.navigationService.changePage(url);
  }

}
