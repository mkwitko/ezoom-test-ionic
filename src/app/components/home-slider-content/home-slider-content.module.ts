import { HomeSliderHeaderModule } from './../home-slider-header/home-slider-header.module';
import { HomeSliderContentComponent } from './home-slider-content.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeSliderContentComponent],
  imports: [ CommonModule, IonicModule, HomeSliderHeaderModule],
  exports: [HomeSliderContentComponent],
  providers: [],
})

export class HomeSliderContentModule {

}
