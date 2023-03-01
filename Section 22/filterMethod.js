const numbers = [1,2,3,4,5,6,7,8,10,11,12,23,34];

numbers.filter(n => {
    return n > 4;
})

//makes a new array that filters out from arrays

movies = [
    {
        title: 'Alien',
        score: 90,
        year: 1924
    },
    {
        title: 'Moops',
        score: 40,
        year: 1924
    },
    {
        title: 'tireD',
        score: 80,
        year: 1924
    }
]

const goodMovies = movies.filter( (movie) => {
    return (movie.score > 79);
}
)
// This will create a new array of objects

const goodTitles = goodMovies.map(m => m.title);
//This gives us the title only of the filter

//You can do this all in one by:

const goodMovies2 = movies.filter( (movie) => {
    return (movie.score > 79)} 
    ).map(m => m.title)