import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SingUPComponent } from './sing-up/sing-up.component';
import { LoginComponent } from './login/login.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Sub2Component } from './sub2/sub2.component';
import { SubComponent } from './sub/sub.component';
import { Sub1Component } from './sub1/sub1.component';
import { SearchPipe } from './search.pipe';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { SignUpReactiveFormComponent } from './sign-up-reactive-form/sign-up-reactive-form.component';
import { NumbersOnlyDirective } from './numbers-only.directive';
import { ViewChild1Component } from './view-child1/view-child1.component';
import { ViewChild2Component } from './view-child2/view-child2.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingUPComponent,
    LoginComponent,
    DatabindingComponent,
    DirectivesComponent,
    LifecyclehooksComponent,
    ParentComponent,
    ChildComponent,
    Sub2Component,
    SubComponent,
    Sub1Component,
    SearchPipe,
    TemplatedrivenformComponent,
    SignUpReactiveFormComponent,
    NumbersOnlyDirective,
    ViewChild1Component,
    ViewChild2Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
