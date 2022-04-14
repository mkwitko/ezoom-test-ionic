import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieCrudPageRoutingModule } from './movie-crud-routing.module';

import { MovieCrudPage } from './movie-crud.page';
import { HeaderCustomModule } from 'src/app/components/header/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieCrudPageRoutingModule,
    HeaderCustomModule
  ],
  declarations: [MovieCrudPage]
})
export class MovieCrudPageModule {}
