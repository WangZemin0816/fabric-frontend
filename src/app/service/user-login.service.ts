import {Injectable} from '@angular/core';
import {HttpRequestService} from './http-request.service';
import {LoginForm} from '../model/login-form';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private http: HttpRequestService) {

  }

  public login(loginForm: LoginForm) {
    return this.http.post('/login', loginForm );
  }
}
