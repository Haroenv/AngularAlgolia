import { Component, OnInit } from '@angular/core';

var instantsearch = require('instantsearch.js');
//  wrong ? but sees the package ie 
// ERROR in ./~/algoliasearch-helper/src/SearchParameters/index.js
// var instantsearch = require('instantsearch.js');
// const instantsearch = require('instantsearch.js');



// wrong: cant find the module ie
//  ERROR in app.component.ts (10,31): Cannot find module 'instantsearch.js/dist/instantsearch.js'.)
// import { instantsearch } from 'instantsearch.js/dist/instantsearch.js';
// import { instantsearch } from 'instantsearch.js/src/lib/main.js';
// import * as instantsearch from 'instantsearch.js';


// wrong becuase it doesn't do anything
// import { } from 'instantsearch.js';
// import {  } from './../../node_modules/instantsearch.js/dist-es5-modulel/src/components/SearchBox';

// wrong sytax ie
//  Identifier expected.)
// import { * } from './../../node_modules/instantsearch.js/';

// wrong because instant search is not exported ie:
//  Cannot find module 'instantsearch.js'.)
// import instantsearch from 'instantsearch.js';

// wrong because it can't be found , how do we use 'main' anyway?  
// import { main } from 'instantsearch.js';


// let search = instantsearch({
//   appId: '$appId',
//   apiKey: '$apiKey',
//   indexName: '$indexName',
//   urlSync: true
// });
//
// let onRenderHandler = function() {};
//
// search.on('render', onRenderHandler);
// // on renderHandler will be called
// // until removeListener is called
// search.removeListener(onRenderHandler);
//
// search.once('render', function(){  });
// // triggered once then removed automatically

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';


  constructor() {
    //     search.addWidget(
    //   instantsearch.widgets.searchBox({
    //     container: '#q',
    //     placeholder: 'Search for products',
    //     autofocus: false,
    //     poweredBy: true
    //   })
    // );


  }

  ngOnInit() {}

}
