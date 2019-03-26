import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {UnauthorizedComponent} from './unauthorized/unauthorized.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {I18nTranslateModule} from '../../i18n-translate.module';
import {HeaderLanguageComponent} from './header/header-language/header-language.component';
import {HeaderUserComponent} from './header/header-user/header-user.component';
import {HeaderRouterComponent} from './header/header-router/header-router.component';
import {ImageModalComponent} from './image-modal/image-modal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    UnauthorizedComponent,
    NotFoundComponent,
    HeaderLanguageComponent,
    HeaderUserComponent,
    HeaderRouterComponent,
    ImageModalComponent
  ],
  imports: [
    CommonModule,
    I18nTranslateModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    UnauthorizedComponent,
    NotFoundComponent,
    HeaderLanguageComponent,
    HeaderUserComponent,
    ImageModalComponent
  ]
})
export class CommonsModule {
}
