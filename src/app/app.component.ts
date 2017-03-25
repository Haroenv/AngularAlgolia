import { Component, AfterViewInit, ViewChild, Renderer, ElementRef } from '@angular/core';

const instantsearch = require('instantsearch.js')

let search = instantsearch({
  appId: '$appId',
  apiKey: '$apiKey',
  indexName: '$indexName',
  urlSync: true
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  title = 'app works!';
  @ViewChild('searchbox') searchBox: ElementRef;

  constructor(private renderer: Renderer) {
  }

  ngAfterViewInit() {
    search.addWidget(
      instantsearch.widgets.searchBox({
        container: this.searchBox.nativeElement
      })
    );
  }
}
