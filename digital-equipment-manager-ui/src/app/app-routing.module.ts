import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs-page/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'equipment',
    loadChildren: () => import('./pages/equipment-io-page/equipment-io-page.module').then(m => m.EquipmentIoPagePageModule)
  },
  {
    path: 'equipment-io-page',
    loadChildren: () => import('./pages/equipment-io-page/equipment-io-page.module').then( m => m.EquipmentIoPagePageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
