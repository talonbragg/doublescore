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

    doublescore.render = function (mainString, mainObject, newElementId) {

    

        var htmlDocument = document.getElementById(el);

        var actualHtml = htmlDocument.innerHTML;

        var newHtml = "";

        

        /*

            Main object should look like:

    

            var myObject = {

                el: "#app",

                data: {

    

                }

            }

        */

    

        for (var key in mainObject.data) {

            newHtml += actualHTML.replace(/{{something}}/g, mainObject.data[key]["something"]);

        }

        document.getElementById(newElementID).innerHTML = newHtml;

    }
    
    return doublescore;
  }));