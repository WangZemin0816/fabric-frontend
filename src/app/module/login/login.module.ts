import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {LoginRoutingModule} from './login-routing.module';
import {I18nTranslateModule} from '../../i18n-translate.module';
import {CommonsModule} from '../commons/commons.module';
import {FormsModule} from '@angular/forms';
import { TitleComponent } from '../commons/title/title.component';
import {CopyrightComponent} from '../commons/copyright/copyright.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    LoginComponent,
    TitleComponent,
    CopyrightComponent,
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CommonsModule,
    I18nTranslateModule,
    LoginRoutingModule
  ],
  bootstrap: [LoginComponent]
})
export class LoginModule {
}
