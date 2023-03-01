//This will let you do methods (which are basically functions) like square.area(4) = 16 or square.perimeter(10) = 40
const square = { 
    area : function (side){
        return (side * side);
    },
    perimeter : function (side){
        return (side * 4);
    }
}