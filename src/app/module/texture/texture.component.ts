import {Component, OnInit, ViewChild} from '@angular/core';
import {FileTextureService} from '../../service/file-texture.service';
import {TOrigin} from '../../model/torigin';


@Component({
  selector: 'app-texture-design',
  templateUrl: './texture.component.html',
  styleUrls: ['./texture.component.css']
})
export class TextureComponent implements OnInit {
  constructor(public textureService: FileTextureService) {
    const th = 1;
  }

  textureImage: TOrigin;

  ngOnInit() {
  }

  setTexture(id) {
    this.textureService.get(id).subscribe(
      response => {
        console.log(response);
        this.textureImage = (response as TOrigin);
      }
    );
  }
}
