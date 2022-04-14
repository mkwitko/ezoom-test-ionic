import { NavigationService } from './../../services/navigation/navigation.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-slider-content',
  templateUrl: './home-slider-content.component.html',
  styleUrls: ['./home-slider-content.component.scss'],
})
export class HomeSliderContentComponent {

  @Input() title;
  @Input() url;
  @Input() content;

  slides = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10
    //autoplay: true
  };

  constructor(
    private navigationService: NavigationService
  ) { }

  goTo(id: string)
  {
    const url = this.url + '-details/' + id;
    this.navigationService.changePage(url);
  }

}
