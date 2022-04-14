import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameCrudHomePage } from './game-crud-home.page';

const routes: Routes = [
  {
    path: '',
    component: GameCrudHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameCrudHomePageRoutingModule {}
