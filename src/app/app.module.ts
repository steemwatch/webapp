import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from './material.module';

import { NavbarComponent as HTML5NavbarComponent } from './elements/navbar.component';

import { AppComponent } from './app.component';
import { ContentComponent } from './content.component';
import { EventStreamComponent } from './event-stream.component';
import { NavbarComponent } from './navbar.component';


const appRoutes: Routes = [
  { path: 'event-stream', component: EventStreamComponent },
  { path: '', redirectTo: '/event-stream', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavbarComponent,
    EventStreamComponent,
    HTML5NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
