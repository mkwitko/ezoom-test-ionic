import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieCrudPage } from './movie-crud.page';

const routes: Routes = [
  {
    path: '',
    component: MovieCrudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieCrudPageRoutingModule {}
