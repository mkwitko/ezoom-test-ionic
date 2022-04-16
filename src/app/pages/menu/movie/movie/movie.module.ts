import { FabRefresherModule } from './../../../../components/fab/fab-refresher/fab-refresher.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviePageRoutingModule } from './movie-routing.module';

import { MoviePage } from './movie.page';
import { HeaderCustomModule } from 'src/app/components/header/header/header.module';
import { ContentCardModule } from 'src/app/components/cards/content-card/content-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviePageRoutingModule,
    HeaderCustomModule,
    ContentCardModule,
    FabRefresherModule
  ],
  declarations: [MoviePage]
})
export class MoviePageModule {}
