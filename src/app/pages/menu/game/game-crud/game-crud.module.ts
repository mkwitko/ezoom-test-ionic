import { HeaderCustomModule } from 'src/app/components/header/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameCrudPageRoutingModule } from './game-crud-routing.module';

import { GameCrudPage } from './game-crud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameCrudPageRoutingModule,
    HeaderCustomModule
  ],
  declarations: [GameCrudPage]
})
export class GameCrudPageModule {}
