import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { s } from './../../node_modules/instantsearch.js/';
// import { s } from '';
// import {  } from './../../node_modules/instantsearch.js/dist-es5-modulel/src/components/SearchBox';
// var instantsearch = require('instantsearch.js');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
