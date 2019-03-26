import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {HttpRequestService} from '../../../../service/http-request.service';

@Component({
  selector: 'app-language',
  templateUrl: './header-language.component.html',
  styleUrls: ['./header-language.component.css']
})
export class HeaderLanguageComponent implements OnInit {

  constructor(public translate: TranslateService,
              public request: HttpRequestService) {
    this.translate.addLangs(['en_US']);
    this.translate.use('en_US');
  }

  changeLanguage(language: string) {
    // 客户端语言切换
    this.translate.use(language);
    // 服务端语言切换
    this.request.language = language;
  }
  ngOnInit() { }

}
