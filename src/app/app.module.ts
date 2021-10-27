import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './component/header/header.component';
import { MainNavComponent } from './component/main-nav/main-nav.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { NgIfSimpleComponent } from './pages/ng-if-simple/ng-if-simple.component';
import { SideCompTestComponent } from './pages/side-comp-test/side-comp-test.component';
import { MainComponent } from './pages/side-comp-test/main/main.component';
import { NavLeftsComponent } from './pages/side-comp-test/main/nav-lefts/nav-lefts.component';
import { NavMinsComponent } from './pages/side-comp-test/main/nav-mins/nav-mins.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainNavComponent,
    SidenavComponent,
    NgIfSimpleComponent,
    SideCompTestComponent,
    MainComponent,
    NavLeftsComponent,
    NavMinsComponent
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
