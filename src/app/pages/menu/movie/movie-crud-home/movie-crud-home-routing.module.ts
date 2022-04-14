import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieCrudHomePage } from './movie-crud-home.page';

const routes: Routes = [
  {
    path: '',
    component: MovieCrudHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieCrudHomePageRoutingModule {}
