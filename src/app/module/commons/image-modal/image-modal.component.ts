import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';


export interface AlertModel {
  title: string;
  message: string;
}


@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent {
  @ViewChild('modal')
  private ele: ElementRef;
  isshow = true;
  message: string;

  constructor() {  }


}
