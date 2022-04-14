import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-slider-content',
  templateUrl: './home-slider-content.component.html',
  styleUrls: ['./home-slider-content.component.scss'],
})
export class HomeSliderContentComponent {

  @Input() title;
  @Input() content;

  slides = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: true
  };

  constructor() { }

}
