import { ContentCardComponent } from './content-card.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ContentCardComponent],
  imports: [ CommonModule, IonicModule ],
  exports: [ContentCardComponent],
  providers: [],
})

export class ContentCardModule {

}
