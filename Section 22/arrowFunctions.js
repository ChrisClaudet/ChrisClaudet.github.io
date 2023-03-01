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
// to make it all on one line: (implicit returns)

const add5 = (x,y) => (x + y)

// arrow function wrapup - using maps (returns arrays of iterated items)
const newMovies = movies.map( function (movie) {
    return `${movie.title} - ${movie.score} / 10`;
}
)

//arrow function version

const newMovies2 = movies.map(
    (movie) => {
        return `${movie.title} - ${movie.score} / 10`;
    }
)
//or simplified:

const newMovies3 = movies.map(movies => (`${movie.title} - ${movie.score} / 10`))