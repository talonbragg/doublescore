doublescore.render = function (mainString, mainObject, newElementId) {

    var htmlDocument = document.getElementById(el);
    var actualHtml = htmlDocument.innerHTML;
    var newHtml = "";
    var tagRE;
    
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
        newHtml += actualHTML.replace(tagRE, mainObject.data[key]["something"]);
    }
    document.getElementById(newElementID).innerHTML = newHtml;
}