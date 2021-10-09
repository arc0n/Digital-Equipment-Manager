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
    path: 'equipment-io-page/:id',
    loadChildren: () => import('./pages/equipment-io-page/equipment-io-page.module').then( m => m.EquipmentIoPagePageModule)
  },
  {
    path: 'employee-dashboard',
    loadChildren: () => import('./pages/employee-dashboard/employee-dashboard.module').then( m => m.EmployeeDashboardPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
