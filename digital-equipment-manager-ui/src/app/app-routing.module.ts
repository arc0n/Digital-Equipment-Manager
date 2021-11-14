import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from "./auth/auth-guard.service";
import {NegAuthGuardService} from "./auth/neg-auth-guard.service";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs-page/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthPageModule),
    canActivate: [NegAuthGuardService],
  },
  {
    path: 'equipment',
    loadChildren: () => import('./pages/equipment-io-page/equipment-io-page.module').then(m => m.EquipmentIoPagePageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'equipment-io-page/:id',
    loadChildren: () => import('./pages/equipment-io-page/equipment-io-page.module').then(m => m.EquipmentIoPagePageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'employee-dashboard',
    loadChildren: () => import('./pages/employee-dashboard/employee-dashboard.module').then(m => m.EmployeeDashboardPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'equipment-add-page',
    loadChildren: () => import('./pages/equipment-add-page/equipment-add-page.module').then( m => m.EquipmentAddPagePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'employee-add-page',
    loadChildren: () => import('./pages/employee-add-page/employee-add-page.module').then( m => m.EmployeeAddPagePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'booking-summary',
    loadChildren: () => import('./pages/booking-summary/booking-summary.module').then( m => m.BookingSummaryPageModule)
  },
  {
    path: 'item-list',
    loadChildren: () => import('./pages/item-list-page/item-list-page.module').then( m => m.ItemListPagePageModule)
  }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
