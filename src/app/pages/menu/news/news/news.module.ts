import { FabRefresherModule } from './../../../../components/fab/fab-refresher/fab-refresher.module';
import { ContentCardModule } from 'src/app/components/cards/content-card/content-card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsPageRoutingModule } from './news-routing.module';

import { NewsPage } from './news.page';
import { HeaderCustomModule } from 'src/app/components/header/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsPageRoutingModule,
    HeaderCustomModule,
    ContentCardModule,
    FabRefresherModule
  ],
  declarations: [NewsPage]
})
export class NewsPageModule {}
