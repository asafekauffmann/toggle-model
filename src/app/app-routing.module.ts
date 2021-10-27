import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgIfSimpleComponent } from './pages/ng-if-simple/ng-if-simple.component';
import { SideCompTestComponent } from './pages/side-comp-test/side-comp-test.component';

const routes: Routes = [
   {
      path: '', component: SidenavComponent
   },
   {
      path: 'ngIf', component: NgIfSimpleComponent
   },
   {
      path: 'comps', component: SideCompTestComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
