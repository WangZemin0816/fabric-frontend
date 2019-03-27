import {Component, OnInit, ViewChild} from '@angular/core';
import {FileTextureService} from '../../service/file-texture.service';
import {TOrigin} from '../../model/torigin';
import {TDivision} from '../../model/tdivision';


@Component({
  selector: 'app-texture-design',
  templateUrl: './texture.component.html',
  styleUrls: ['./texture.component.css']
})
export class TextureComponent implements OnInit {
  torigin: TOrigin;
  tdivision: TDivision;
  constructor(public textureService: FileTextureService) {
    const th = 1;
  }



  ngOnInit() {
    
  }

  setTexture(id) {
    this.textureService.get(id).subscribe(
      response => {
        console.log(response);
        this.torigin = (response as TOrigin);
        this.tdivision = (this.torigin.tdivision as TDivision);
        console.log(JSON.stringify(this.tdivision));
      }
    );
  }
}
