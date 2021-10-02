import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
