import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EFile} from '../../../model/efile';
import {FileBaseService} from '../../../service/file-base.service';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent implements OnInit {

  @Output() selectImgEvent: EventEmitter<any> = new EventEmitter();

  images: Array<EFile>;

  selectedImg: EFile;

  @Input() fileService: FileBaseService;

  constructor() {
    this.images = [];
  }

  getImgUrl(efile: EFile) {
    return this.fileService.getAbsUrl(efile.url);
  }

  selectImage(efile: EFile) {
    this.selectedImg = efile;
  }

  confirmImage() {
    this. selectImgEvent.emit(this.selectedImg.id);
  }

  ngOnInit() {
    this.fileService.getAll(0, 10).subscribe(
      response => {
        this.images = (response.content as Array<EFile>);
        if (this.images.length > 1) {
          this.selectedImg = this.images[0];
        }
      });
  }
}
