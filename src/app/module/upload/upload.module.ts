import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UploadComponent} from './upload.component';
import {UploadRoutingModule} from './upload-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    FormsModule,
    UploadRoutingModule
  ]
})
export class UploadModule {
}
