import { FabRefresherModule } from './../../../../components/fab/fab-refresher/fab-refresher.module';
import { ContentCardModule } from 'src/app/components/cards/content-card/content-card.module';
import { HeaderCustomModule } from './../../../../components/header/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamePageRoutingModule } from './game-routing.module';

import { GamePage } from './game.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamePageRoutingModule,
    HeaderCustomModule,
    ContentCardModule,
    FabRefresherModule
  ],
  declarations: [GamePage]
})
export class GamePageModule {}
