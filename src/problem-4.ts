type Rectangle = {
    shape: "rectangle";
    height: number,
    width: number,
}
type Circle  = {
    shape: "circle";
    radius: number,
}

type ShapeType = Circle | Rectangle;

function calculateShapeArea(shapeObj: ShapeType): number {
    let area = 0;

    if(shapeObj.shape === "rectangle"){
        area = shapeObj.height * shapeObj.width;
    }else {
        area = 3.1416 * shapeObj.radius * shapeObj.radius; 
    }
    return area;
}

