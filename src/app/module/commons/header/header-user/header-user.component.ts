import {Component, Input, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {HttpRequestService} from '../../../../service/http-request.service';
import {UserManageService} from '../../../../service/user-manage.service';
import {User} from '../../../../model/user';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css'],
})
export class HeaderUserComponent implements OnInit {

  public username: string;

  constructor(public translate: TranslateService,
              public usermanage: UserManageService) {
      this.usermanage.getCurrentUser().subscribe(
        response => {
          this.username = (response as User).account;
        },
        err => {
          console.log('no current user:' + JSON.stringify(err));
        });
  }

  ngOnInit() {
  }

}
