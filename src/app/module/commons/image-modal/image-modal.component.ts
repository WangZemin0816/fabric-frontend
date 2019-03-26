import {Component, Input, OnInit} from '@angular/core';
import {EFile} from '../../../model/efile';
import {FileBaseService} from '../../../service/file-base.service';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent implements OnInit{

  images: Array<EFile>;

  @Input() fileService: FileBaseService;


  constructor() {
    this.images = [];
  }

  ngOnInit() {
    this.fileService.getAll(0, 10).subscribe(
      response => {
        this.images = (response.content as Array<EFile>);
      });
  }
}
