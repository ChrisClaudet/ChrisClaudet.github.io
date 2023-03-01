const add = function (x, y){
    return x + y;
}
// This is a normal function saved to var add
function add2 (x,y){
    return x + y;
}
//add2 is a traditional function

//THIS is an arrow function

const add3 = (x,y) => {
    return x + y;
}

//We can also remove return by having this in brackets rather than {}:

const add4 = (x,y) => (
    x + y
)
// to make it all on one line:

const add5 = (x,y) => (x + y)