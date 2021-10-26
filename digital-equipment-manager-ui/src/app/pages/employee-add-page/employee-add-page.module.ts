import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeAddPagePageRoutingModule } from './employee-add-page-routing.module';

import { EmployeeAddPagePage } from './employee-add-page.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    EmployeeAddPagePageRoutingModule
  ],
  declarations: [EmployeeAddPagePage]
})
export class EmployeeAddPagePageModule {}
