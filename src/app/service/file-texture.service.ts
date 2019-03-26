import {Injectable, Injector} from '@angular/core';
import {TOrigin} from '../model/torigin';
import {FileBaseService} from './file-base.service';

@Injectable({
  providedIn: 'root'
})
export class FileTextureService extends FileBaseService {

  constructor(private injector: Injector) {
    super(injector);
  }

  public uploadTexture(texture: TOrigin, origin: File, division: File) {
    const uploadURL = 'texture/upload';
    const formData = new FormData();
    formData.append('origin', origin);
    formData.append('division', division);
    formData.append('efile', JSON.stringify(texture));
    return this.http.upload(uploadURL, formData).subscribe(
      resp => {
        console.log(resp);
      });
  }
}
