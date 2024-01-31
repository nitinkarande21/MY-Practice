import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SingUPComponent } from './sing-up/sing-up.component';

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: "singup", component: SingUPComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
