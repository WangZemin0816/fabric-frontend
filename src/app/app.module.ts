import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppRoutingModule} from './app-routing.module';
import {ManageModule} from './module/manage/manage.module';
import {CommonsModule} from './module/commons/commons.module';
import {LoginModule} from './module/login/login.module';
import {AppComponent} from './app.component';
import {I18nTranslateModule} from './i18n-translate.module';
import {HttpClientModule} from '@angular/common/http';
import {UploadModule} from './module/upload/upload.module';
import {TextureModule} from './module/texture/texture.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    CommonsModule,
    ManageModule,
    LoginModule,
    UploadModule,
    TextureModule,
    I18nTranslateModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
