import {Component, OnInit} from '@angular/core';
import {FileTextureService} from '../../../service/file-texture.service';
import {TOrigin} from '../../../model/torigin';

@Component({
  selector: 'app-upload-texture',
  templateUrl: './upload-texture.component.html',
  styleUrls: ['./upload-texture.component.css']
})
export class UploadTextureComponent implements OnInit {

  originImg: File;

  divisionImg: File;

  torigin: TOrigin;

  constructor(private textureService: FileTextureService) {
  }

  ngOnInit() {
    this.torigin = new TOrigin();
  }

  originFileSelect(fileInput: any) {
    this.originImg = (fileInput.target.files as Array<File>)[0];
  }

  divisionFileSelect(fileInput: any) {
    this.divisionImg = (fileInput.target.files as Array<File>)[0];
  }

  upload() {
    this.textureService.uploadTexture(this.torigin, this.originImg, this.divisionImg);
  }
}
