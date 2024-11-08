"use strict";
function calculateShapeArea(shapeObj) {
    let area = 0;
    if (shapeObj.shape === "rectangle") {
        area = shapeObj.height * shapeObj.width;
    }
    else {
        area = 3.1416 * shapeObj.radius * shapeObj.radius;
    }
    return area;
}
