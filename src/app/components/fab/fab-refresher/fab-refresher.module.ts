import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabRefresherComponent } from './fab-refresher.component';

@NgModule({
  declarations: [
    FabRefresherComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    FabRefresherComponent
  ],
  providers: []
})

export class FabRefresherModule{}
