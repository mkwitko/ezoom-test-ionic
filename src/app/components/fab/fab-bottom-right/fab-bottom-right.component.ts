import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fab-bottom-right',
  templateUrl: './fab-bottom-right.component.html',
  styleUrls: ['./fab-bottom-right.component.scss'],
})
export class FabBottomRightComponent {

  // Passar o destino completo
  @Input() url;

  constructor(
    private navigationService: NavigationService
  ) { }

  goTo()
  {
    this.navigationService.changePage(this.url);
  }

}
