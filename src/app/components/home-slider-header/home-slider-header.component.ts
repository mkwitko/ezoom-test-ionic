import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-slider-header',
  templateUrl: './home-slider-header.component.html',
  styleUrls: ['./home-slider-header.component.scss'],
})
export class HomeSliderHeaderComponent implements OnInit {

  @Input() title;

  constructor() { }

  ngOnInit() {}

}
