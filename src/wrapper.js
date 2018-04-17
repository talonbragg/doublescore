/* Globalize doublescore */
/* ^^^^^^^^^^^^^^^^^^^^^ */

(function createDoublescore (global, factory) {
    if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
      factory(exports); // CommonJS
    } else if (typeof define === 'function' && define.amd) {
      define(['exports'], factory);
    } else {
      global.Doublescore = factory({});
      factory(global.Doublescore); 
    }
  }(this, function doublescoreFactory (Doublescore) {

    //=require ./index.js
    
    return Doublescore;
  }));