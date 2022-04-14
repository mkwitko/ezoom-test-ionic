import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicCrudHomePageRoutingModule } from './music-crud-home-routing.module';

import { MusicCrudHomePage } from './music-crud-home.page';
import { HeaderCustomModule } from 'src/app/components/header/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicCrudHomePageRoutingModule,
    HeaderCustomModule
  ],
  declarations: [MusicCrudHomePage]
})
export class MusicCrudHomePageModule {}
