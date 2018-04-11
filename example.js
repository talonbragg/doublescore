var myObject = {
    el: "myElement",
    data: {
        Name: "Talon",
        Age: "20",
        Height: "5'6"
    }
}

doublescore.render("__Name__ is __Age__ years old and his height is __Height__", myObject, "newElement");