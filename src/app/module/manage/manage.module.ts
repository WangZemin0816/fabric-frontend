import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ManageComponent} from './manage.component';
import {UserComponent} from './user/user.component';
import {CommonModule} from '@angular/common';
import {ManageRoutingModule} from './manage-routing.module';

@NgModule({
  declarations: [
    UserComponent,
    ManageComponent
  ],
  imports: [
    CommonModule,
    ManageRoutingModule
  ],
  exports: [RouterModule]
})
export class ManageModule {
}
