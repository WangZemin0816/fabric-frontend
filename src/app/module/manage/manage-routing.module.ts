import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ManageComponent} from './manage.component';

const manageRoutes: Routes = [
  {path: 'manage', component: ManageComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(manageRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ManageRoutingModule {
}
