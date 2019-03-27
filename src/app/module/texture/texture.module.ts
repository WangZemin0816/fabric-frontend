import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextureComponent } from './texture.component';
import {TextureRoutingModule} from './texture-routing.module';
import {CommonsModule} from '../commons/commons.module';

@NgModule({
  declarations: [
    TextureComponent
  ],
  imports: [
    CommonModule,
    CommonsModule,
    TextureRoutingModule
  ]
})
export class TextureModule { }
