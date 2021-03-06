import { AddingContentCardModule } from './../../../components/cards/adding-content-cards/adding-content.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { HeaderCustomModule } from 'src/app/components/header/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderCustomModule,
    AddingContentCardModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
