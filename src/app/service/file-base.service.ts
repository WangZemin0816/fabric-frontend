import {Injectable, Injector} from '@angular/core';
import {HttpRequestService} from './http-request.service';

@Injectable({
  providedIn: 'root'
})
export abstract class FileBaseService {

  protected http: HttpRequestService;

  constructor(private baseInjector: Injector) {
    this.http = this.baseInjector.get(HttpRequestService);
  }

  // hello11111111111111111111111111111111111111111
}
