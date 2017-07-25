import { NgModule } from '@angular/core';

import {
  MdButtonModule,
  MdIconModule,
  MdSidenavModule,
} from '@angular/material';


@NgModule({
  imports: [
    MdButtonModule,
    MdIconModule,
    MdSidenavModule,
  ],
  exports: [
    MdButtonModule,
    MdIconModule,
    MdSidenavModule,
  ]
})
export class MaterialModule { }
