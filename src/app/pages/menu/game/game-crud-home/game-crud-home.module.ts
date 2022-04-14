import { ContentCardModule } from 'src/app/components/cards/content-card/content-card.module';
import { HeaderCustomModule } from 'src/app/components/header/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameCrudHomePageRoutingModule } from './game-crud-home-routing.module';

import { GameCrudHomePage } from './game-crud-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameCrudHomePageRoutingModule,
    HeaderCustomModule,
    ContentCardModule
  ],
  declarations: [GameCrudHomePage]
})
export class GameCrudHomePageModule {}
