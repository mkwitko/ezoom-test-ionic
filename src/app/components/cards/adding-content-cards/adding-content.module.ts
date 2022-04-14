import { AddingContentCardsComponent } from './adding-content-cards.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AddingContentCardsComponent],
  imports: [ CommonModule, IonicModule ],
  exports: [AddingContentCardsComponent],
  providers: [],
})

export class AddingContentCardModule {

}
