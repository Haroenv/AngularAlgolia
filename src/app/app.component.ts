import { Component, OnInit } from '@angular/core';

//  wrong ?
var instantsearch = require('instantsearch.js');


// all of these are wrong too.
// import { } from 'instantsearch.js';
// import { * } from './../../node_modules/instantsearch.js/';
// import {  } from './../../node_modules/instantsearch.js/dist-es5-modulel/src/components/SearchBox';
// var instantsearch = require('instantsearch.js');



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
