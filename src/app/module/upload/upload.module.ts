import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UploadComponent} from './upload.component';
import {UploadRoutingModule} from './upload-routing.module';
import {FormsModule} from '@angular/forms';
import { UploadTextureComponent } from './upload-texture/upload-texture.component';
import { UploadPatternComponent } from './upload-pattern/upload-pattern.component';

@NgModule({
  declarations: [UploadComponent, UploadTextureComponent, UploadPatternComponent],
  imports: [
    CommonModule,
    FormsModule,
    UploadRoutingModule
  ]
})
export class UploadModule {
}
