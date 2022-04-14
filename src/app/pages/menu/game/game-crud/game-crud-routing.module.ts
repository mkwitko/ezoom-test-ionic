import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameCrudPage } from './game-crud.page';

const routes: Routes = [
  {
    path: '',
    component: GameCrudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameCrudPageRoutingModule {}
