import { NgModule } from '@angular/core';

import {
  MdButtonModule,
  MdCheckboxModule,
  MdIconModule,
} from '@angular/material';


@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdIconModule,
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdIconModule,
  ]
})
export class MaterialModule { }
