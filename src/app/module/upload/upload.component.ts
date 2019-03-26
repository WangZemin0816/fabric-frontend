import {Component, OnInit} from '@angular/core';
import {HttpRequestService} from '../../service/http-request.service';
import {FilePatternService} from '../../service/file-pattern.service';
import {EFile} from '../../model/efile';
import {Pattern} from '../../model/pattern';
import {FileTextureService} from '../../service/file-texture.service';
import {TOrigin} from '../../model/torigin';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public efile = new TOrigin();

  public file: File;

  public file1: File;

  public patterns: Array<Pattern>;
  constructor(private manage: FileTextureService) {
  }

  ngOnInit() {
  }

  fileSelect(fileInput: any) {
    this.file = (fileInput.target.files as Array<File>)[0];
  }

  file1Select(fileInput: any) {
    this.file1 = (fileInput.target.files as Array<File>)[0];
  }

  uploadPattern() {
    console.log(JSON.stringify(this.efile));
    // this.manage.upload(this.efile, this.file);
  }

  uploadTexture() {
    console.log(JSON.stringify(this.efile));
    this.manage.uploadTexture(this.efile, this.file, this.file1)
  }
  getAll() {
    this.manage.getAll(0, 10).subscribe(
      resp => {
        this.patterns = (resp.content as Array<Pattern>);
      }
    );
  }
}
