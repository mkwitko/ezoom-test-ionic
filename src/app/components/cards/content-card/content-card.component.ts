import { NavigationService } from './../../../services/navigation/navigation.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent{

  @Input() url;
  @Input() content;

  constructor(
    private navigationService: NavigationService
  ) { }

  goTo(id: string)
  {
    const url = this.url + '-details/' + id;
    this.navigationService.changePage(url);
  }

}
