import { IonicModule } from '@ionic/angular';
import { HomeSliderHeaderComponent } from './home-slider-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeSliderHeaderComponent],
  imports: [ CommonModule, IonicModule ],
  exports: [HomeSliderHeaderComponent],
  providers: [],
})

export class HomeSliderHeaderModule {

}
