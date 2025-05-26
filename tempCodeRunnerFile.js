"use strict";
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
function getDerection(direction) {
    if (Direction.Up === "Up") {
        return console.log(true);
    }
}
getDerection(Direction.Up);
