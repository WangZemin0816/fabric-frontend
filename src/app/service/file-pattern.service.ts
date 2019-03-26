import {Injectable, Injector, OnInit} from '@angular/core';
import {HttpRequestService} from './http-request.service';
import {Pattern} from '../model/pattern';
import {EFile} from '../model/efile';
import {TOrigin} from '../model/torigin';
import {FileBaseService} from './file-base.service';

@Injectable({
  providedIn: 'root'
})
export class FilePatternService extends FileBaseService {

  constructor(private injector: Injector) {
    super(injector);
  }

  public upload(pattern: Pattern, file: File) {
    const uploadURL = 'pattern/upload';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('efile', JSON.stringify(pattern));
    console.log('123123123');
    return this.http.upload(uploadURL, formData).subscribe(
      resp => {
        console.log(resp);
      });
  }

  public getAll(page: number, size: number) {
    const getAllURL = 'pattern/getAll?page=' + page + '&size=' + size;
    return this.http.get(getAllURL, null);
  }

}
