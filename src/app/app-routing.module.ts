
import { AllCompComponent } from './pages/all-comp/all-comp.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgIfSimpleComponent } from './pages/ng-if-simple/ng-if-simple.component';


const routes: Routes = [
   {
      path: '', component: SidenavComponent
   },
   {
      path: 'ngIf', component: NgIfSimpleComponent
   },
   {
      path: 'all', component: AllCompComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
