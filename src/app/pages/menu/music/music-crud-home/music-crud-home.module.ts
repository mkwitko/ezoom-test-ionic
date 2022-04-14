import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicCrudHomePageRoutingModule } from './music-crud-home-routing.module';

import { MusicCrudHomePage } from './music-crud-home.page';
import { HeaderCustomModule } from 'src/app/components/header/header/header.module';
import { SkeletonCardModule } from 'src/app/components/skeleton/skeleton-card/skeleton-card.module';
import { ContentCardModule } from 'src/app/components/cards/content-card/content-card.module';
import { FabBottomRightModule } from 'src/app/components/fab/fab-bottom-right/fab-bottom-right.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicCrudHomePageRoutingModule,
    HeaderCustomModule,
    SkeletonCardModule,
    ContentCardModule,
    FabBottomRightModule
  ],
  declarations: [MusicCrudHomePage]
})
export class MusicCrudHomePageModule {}
