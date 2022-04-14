import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsCrudHomePage } from './news-crud-home.page';

const routes: Routes = [
  {
    path: '',
    component: NewsCrudHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsCrudHomePageRoutingModule {}
