import {Injectable, Injector, Pipe, PipeTransform} from '@angular/core';
import {HttpRequestService} from './http-request.service';

@Injectable({
  providedIn: 'root'
})
export abstract class FileBaseService {

  protected http: HttpRequestService;

  constructor(private baseInjector: Injector) {
    this.http = this.baseInjector.get(HttpRequestService);
  }

  public getAbsUrl(relUrl: string) {
    return this.http.getAbsUrl(relUrl);
  }

  public abstract getAll(page: number, size: number);

  // hello11111111111111111111111111111111111111111
}
