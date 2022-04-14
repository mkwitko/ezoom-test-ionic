import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicCrudPageRoutingModule } from './music-crud-routing.module';

import { MusicCrudPage } from './music-crud.page';
import { HeaderCustomModule } from 'src/app/components/header/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicCrudPageRoutingModule,
    HeaderCustomModule
  ],
  declarations: [MusicCrudPage]
})
export class MusicCrudPageModule {}
