import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicDetailsPageRoutingModule } from './music-details-routing.module';

import { MusicDetailsPage } from './music-details.page';
import { HeaderCustomModule } from 'src/app/components/header/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicDetailsPageRoutingModule,
    HeaderCustomModule
  ],
  declarations: [MusicDetailsPage]
})
export class MusicDetailsPageModule {}
