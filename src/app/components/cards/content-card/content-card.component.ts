import { CrudService } from 'src/app/services/crud/crud.service';
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
  @Input() crud = false;

  constructor(
    private navigationService: NavigationService
  ) { }

  goTo(id: string)
  {
    let route = '-details/';

    if(this.crud === true)
    {
      route = '-crud/';
    }
    const url = this.url + route + id;
    this.navigationService.changePage(url);
  }

}
