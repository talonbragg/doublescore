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

    doublescore.render = function (mainString, mainObject) {

    

        var tagRE;

        var newString;

        /*

            Main object should look like:

    

            var myObject = {

                el: "#app",

                data: {

    

                }

            }

        */

    

        for (var key in mainObject.data) {

            tagRE = new RegExp(key, 'gi');

            newString = mainString.replace(tagRE, mainObject.data[key]["something"]);

        }

        return newString;

    }
    
    return doublescore;
  }));