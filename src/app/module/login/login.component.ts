import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {UserLoginService} from '../../service/user-login.service';
import {LoginForm} from '../../model/login-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginErrorInfo: string;
  public loginForm = new LoginForm();

  constructor(public translate: TranslateService,
              public loginService: UserLoginService) {
  }

  ngOnInit() {
  }

  public loginSubmit() {
    this.loginService.login(this.loginForm).subscribe(
      response => {
        console.log('login success!');
      },
      err => {
        this.loginErrorInfo = JSON.stringify(err.error);
      }
    );
  }
}
