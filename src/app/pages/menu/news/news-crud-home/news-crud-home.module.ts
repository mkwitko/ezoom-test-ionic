import { FabBottomRightModule } from './../../../../components/fab/fab-bottom-right/fab-bottom-right.module';
import { ContentCardModule } from 'src/app/components/cards/content-card/content-card.module';
import { SkeletonCardModule } from './../../../../components/skeleton/skeleton-card/skeleton-card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsCrudHomePageRoutingModule } from './news-crud-home-routing.module';

import { NewsCrudHomePage } from './news-crud-home.page';
import { HeaderCustomModule } from 'src/app/components/header/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsCrudHomePageRoutingModule,
    HeaderCustomModule,
    SkeletonCardModule,
    ContentCardModule,
    FabBottomRightModule
  ],
  declarations: [NewsCrudHomePage]
})
export class NewsCrudHomePageModule {}
