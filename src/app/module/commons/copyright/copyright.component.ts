import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

}
