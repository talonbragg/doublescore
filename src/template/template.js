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