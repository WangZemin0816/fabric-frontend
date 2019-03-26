import {Injectable} from '@angular/core';
import {HttpRequestService} from './http-request.service';

@Injectable({
  providedIn: 'root'
})
export class UserManageService {

  constructor(private http: HttpRequestService) {
  }

  public getCurrentUser() {
    return this.http.post('/currentuser', null);
  }

  public logout() {
    return this.http.post('/logout', null);
  }
}
