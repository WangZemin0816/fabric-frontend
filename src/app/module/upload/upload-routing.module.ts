import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UploadComponent} from './upload.component';

const manageRoutes: Routes = [
  {path: 'upload', component: UploadComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(manageRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UploadRoutingModule {
}
