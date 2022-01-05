import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryPagePage } from './history-page.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryPagePageRoutingModule {}
