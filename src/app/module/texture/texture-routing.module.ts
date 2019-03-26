import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TextureComponent} from './texture.component';


const textureRoutes: Routes = [
  {
    path: 'texture', component: TextureComponent,
    children: [
      {path: '', component: TextureComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(textureRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TextureRoutingModule { }
