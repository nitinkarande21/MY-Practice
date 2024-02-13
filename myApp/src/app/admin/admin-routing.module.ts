import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { SignUpComponent } from './signup/sign-up.component';

const routes: Routes = [
  {path:'adminLanding', component:AdminLandingComponent},
  {path:'adminSignUp', component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
