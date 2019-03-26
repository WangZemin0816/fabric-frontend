import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header-router',
  templateUrl: './header-router.component.html',
  styleUrls: ['./header-router.component.css']
})
export class HeaderRouterComponent implements OnInit {
  @Output() routerEvent: EventEmitter<any> = new EventEmitter();
  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  headerRouterEvent(url: string) {
    this.routerEvent.emit(url);
  }

}
