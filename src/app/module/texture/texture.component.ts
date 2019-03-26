import {Component, OnInit, ViewChild} from '@angular/core';
import {FileTextureService} from '../../service/file-texture.service';


@Component({
  selector: 'app-texture-design',
  templateUrl: './texture.component.html',
  styleUrls: ['./texture.component.css']
})
export class TextureComponent implements OnInit {
  constructor(public fileService: FileTextureService) {
    const th = 1;
  }

  ngOnInit() {
  }

  selectTexture() {
    const th = 1;
  }
}
