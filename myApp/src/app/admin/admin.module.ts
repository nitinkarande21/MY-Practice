import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { SignUpComponent } from './signup/sign-up.component';

console.log("admin calling");



@NgModule({
  declarations: [
    AdminLandingComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
