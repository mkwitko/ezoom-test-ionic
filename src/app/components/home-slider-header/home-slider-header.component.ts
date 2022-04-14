import { NavigationService } from './../../services/navigation/navigation.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-slider-header',
  templateUrl: './home-slider-header.component.html',
  styleUrls: ['./home-slider-header.component.scss'],
})
export class HomeSliderHeaderComponent {

  @Input() title;
  @Input() url;

  constructor(
    private navigationService: NavigationService
  ) { }

  goTo()
  {
    this.navigationService.changePage(this.url + '-home');
  }

}
