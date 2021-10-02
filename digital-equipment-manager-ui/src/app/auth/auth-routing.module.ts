import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';
import {NegAuthGuardService} from "./neg-auth-guard.service";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AuthPage,
    canActivate: [NegAuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
