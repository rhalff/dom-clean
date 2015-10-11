'use strict';

/* global document */

var clean = require('./index');
require('should');

describe('Dom McClean', function() {

  var testus = {

     '<div>   <h2><!-- comment --> </h2></div>':
     '<div><h2></h2></div>',

     '<div>A<h2><!-- comment -->B</h2></div>':
     '<div>A<h2>B</h2></div>',

     '<div>   <h2><!-- comment --> </h2>   </div>':
     '<div><h2></h2></div>'

  };

  it('HTML', function() {
      Object.keys(testus).forEach(function(key) {
        var cleaned = clean.html(key);
        cleaned.should.eql(testus[key]);
      });
  });

  it('el', function() {
      Object.keys(testus).forEach(function(key) {
        var d = document.createElement('div');
        d.innerHTML = key;
        clean.el(d);
        d.innerHTML.should.eql(testus[key]);
      });
  });

});
