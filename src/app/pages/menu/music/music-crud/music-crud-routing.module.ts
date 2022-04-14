import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicCrudPage } from './music-crud.page';

const routes: Routes = [
  {
    path: '',
    component: MusicCrudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicCrudPageRoutingModule {}
