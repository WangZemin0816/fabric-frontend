import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {HttpRequestService} from '../../../service/http-request.service';
import {UserManageService} from '../../../service/user-manage.service';
import {User} from '../../../model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() routerEvent: EventEmitter<any> = new EventEmitter();

  public currentUser: User;


  constructor(private translate: TranslateService,
              private request: HttpRequestService,
              private usermanage: UserManageService) {
    this.routerEvent.emit(1);
  }

  public headerRouterEvent(url: string) {
    this.routerEvent.emit(url);
  }

  ngOnInit() {
  }

}
