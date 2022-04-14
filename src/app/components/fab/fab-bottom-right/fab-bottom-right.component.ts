import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab-bottom-right',
  templateUrl: './fab-bottom-right.component.html',
  styleUrls: ['./fab-bottom-right.component.scss'],
})
export class FabBottomRightComponent {

  @Input() url;

  constructor(
    private navigationService: NavigationService
  ) { }

  goTo()
  {
    this.navigationService.changePage(this.url);
  }

}
