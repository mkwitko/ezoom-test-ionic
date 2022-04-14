import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicCrudHomePage } from './music-crud-home.page';

const routes: Routes = [
  {
    path: '',
    component: MusicCrudHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicCrudHomePageRoutingModule {}
