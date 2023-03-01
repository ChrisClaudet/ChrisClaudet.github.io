const prices = [9.99, 10.99, 15.50, 30.40, 19.99, 25.50]

const total = prices.reduce((total, price) => total + price)
//this will add them accumulated all together


const maximum = prices.reduce((min, price) => {
    if(price < min){
        return price;
    }
    else return min;
})
// this is to find the maximum in an array (MAX)


const minimum = prices.reduce((min, price) => {
    if(price > min){
        return price;
    }
    else return min;
})
// this is to find the minimum



//Working with objects

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

const highestRated = movies.reduce((bestMovie, currMovie) => {
    if( currMovie.score > bestMovie.score){
        return currMovie
    }
    return bestMovie;
})