import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LoginForm} from '../../../model/login-form';
import {UserLoginService} from '../../../service/user-login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public loginErrorInfo: string;
  public loginForm = new LoginForm();

  constructor(public translate: TranslateService,
              public loginService: UserLoginService) {
  }

  ngOnInit() {
  }

  private loginSubmit() {
    this.loginService.login(this.loginForm).subscribe(
      response => {
        console.log('login success!');
      },
      err => {
        this.loginErrorInfo = err.error;
      }
    );
  }
}
