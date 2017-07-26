import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

import { MdIconRegistry } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'SteemWatch';

  constructor(
    private iconRegistry: MdIconRegistry,
    private sanitizer: DomSanitizer,
  ) {
    iconRegistry.addSvgIcon(
        'steem',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/steem.svg'));
  }
}
