require('babel-register')();

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('<div id="global"></div>');

global.window = document.defaultView;
$ = require('jquery'),
    XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

$.support.cors = true;
$.ajaxSettings.xhr = function() {
  return new XMLHttpRequest();
};
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});
global.navigator = {
  userAgent: 'node.js'
};


documentRef = document;
