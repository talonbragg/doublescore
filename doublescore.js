/* Globalize doublescore */
/* ^^^^^^^^^^^^^^^^^^^^^ */

(function createDoublescore (global, factory) {
    if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
      factory(exports); // CommonJS
    } else if (typeof define === 'function' && define.amd) {
      define(['exports'], factory);
    } else {
      global.Doublescore = {};
      factory(global.Doublescore); 
    }
  }(this, function doublescoreFactory (doublescore) {

    //Requirements of all files will go here
    
    return mustache;
  }));