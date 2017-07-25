import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar.component';
import { AppContentComponent } from './app-content.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppContentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
