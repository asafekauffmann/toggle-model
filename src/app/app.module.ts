import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './component/header/header.component';
import { MainNavComponent } from './component/main-nav/main-nav.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { NgIfSimpleComponent } from './pages/ng-if-simple/ng-if-simple.component';
import { AllCompComponent } from './pages/all-comp/all-comp.component';
import { MainRouteComponent } from './component/main-route/main-route.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainNavComponent,
    SidenavComponent,
    NgIfSimpleComponent,
    AllCompComponent,
    MainRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
